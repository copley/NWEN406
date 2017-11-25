using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace DAL
{
    public partial class DbContextFactory
    {
        /// <summary>
        /// Create EF DbContext object via singleton design pattern
        /// </summary>
        public static DbContext Create()
        {
            DbContext dbContext = CallContext.GetData("DbContext") as DbContext;
            if (dbContext==null)
            {
                dbContext=new GroupEntities();
                CallContext.SetData("DbContext",dbContext);
            }
            return dbContext;
        }
    }
}
