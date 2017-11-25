using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using IDAL;

namespace DALContainer
{
    public class Container
    {
        /// <summary>
        /// Autofac  Container exposed to BLL layer 
        /// </summary>
        public static IContainer container = null;

        /// <summary>
        /// Get IDal object via singleton design pattern
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T Resolve<T>()
        {
            try
            {
                if (container == null)
                {
                    Initialise();
                }
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("IOC instantiation error!" + ex.Message);
            }

            return container.Resolve<T>();
        }

        /// <summary>
        /// 初始化
        /// </summary>
        public static void Initialise()
        {
            var builder = new ContainerBuilder();
            //格式：builder.RegisterType<xxxx>().As<Ixxxx>().InstancePerLifetimeScope();
            builder.RegisterType<MemberDAL>().As<IMemberDAL>().InstancePerLifetimeScope();
            container = builder.Build();
        }
    }
}
