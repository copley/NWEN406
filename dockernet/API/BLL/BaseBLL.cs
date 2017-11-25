using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using IDAL;

namespace BLL
{
    public abstract partial class BaseBLL<T> where T : class, new()
    {
        public BaseBLL()
        {
            SetDal();
        }

        // Dal object value gets assigned when Derived class is overriding method SetDal()
        public IBaseDAL<T> Dal;

        public abstract void SetDal();
        
        // call Add method in Dal 
        public bool Add(T t)
        {
            Dal.Add(t);
            return Dal.SaveChanges();
        }
        
        // call GetModels method in Dal 
        public IQueryable<T> GetModels(Expression<Func<T, bool>> whereLambda)
        {
            return Dal.GetModels(whereLambda);
        }
        
        // call Update method in Dal 
        public bool Update(T t)
        {
            Dal.Update(t);
            return Dal.SaveChanges();
        }
        
        // call Delete method in Dal 
        public bool Delete(T t)
        {
            Dal.Delete(t);
            return Dal.SaveChanges();
        }
    
    }
}
