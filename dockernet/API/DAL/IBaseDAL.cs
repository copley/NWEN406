using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace IDAL
{
    public partial interface IBaseDAL<T> where T : class, new()
    {
        // CRUD 
        void Add(T t);
        IQueryable<T> GetModels(Expression<Func<T, bool>> whereLambda);
        void Update(T t);
        void Delete(T t);
       
        
        /// <summary>
        /// One BLL method may involve multiple DB operations, they can group together and call this method once to reduce DB calls. 
        /// </summary>
        bool SaveChanges();
    }
}
