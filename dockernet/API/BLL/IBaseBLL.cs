using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace IBLL
{
    public partial interface IBaseBLL<T> where T:class ,new()
    {
        bool Add(T t);
        IQueryable<T> GetModels(Expression<Func<T, bool>> whereLambda);
        bool Update(T t);
        bool Delete(T t);
   }
}
