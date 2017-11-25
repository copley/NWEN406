using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IBLL;
using IDAL;
using Model;

namespace BLL
{
    public partial class MemberBLL : BaseBLL<Member>, IMemberBLL
    {
        private IMemberDAL MemberDAL = DALContainer.Container.Resolve<IMemberDAL>();
        public override void SetDal()
        {
            Dal = MemberDAL;
        }
    }
}
