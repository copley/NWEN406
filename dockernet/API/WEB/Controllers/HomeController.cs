using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL;
using Model;
/*
1) WEB refers to BLL,Model   // forward request  
2)BLL refers to DAL,Model   //validation and other logic 
3)DAL refers to Model      // CRUD 
4)Model no refer

web –> bll –> dal
|       |       |
|       V       |
+–> model   <—+

*/
namespace WEB.Controllers
{
    public class HomeController : Controller
    {
        private IMemberBLL MemberBLL = BLLContainer.Container.Resolve<IMemberBLL>();
        
        // Call the Add method in BLL 
        public ActionResult Add(Member Member)
        {
            if (MemberBLL.Add(Member))
            {
                return Redirect("Index");
            }
            else
            {
                return Content("no");
            }
        }
        
        //  Call the GetModels method in BLL 
        public ActionResult Index()
        {
            List<Member>list = MemberBLL.GetModels(p => true).ToList();
            return View(list);
        }
        
        // Call the Update method in BLL 
        public ActionResult Update(Member Member)
        {
            if (MemberBLL.Update(Member))
            {
                return Redirect("Index");
            }
            else
            {
                return Content("no");
            }
        }
        
        // Call the Delete method in BLL 
        public ActionResult Delete(int Id)
        {
            var Member = MemberBLL.GetModels(p => p.Id == Id).FirstOrDefault();
            if (MemberBLL.Delete(Member))
            {
                return Redirect("Index");
            }
            else
            {
                return Content("no");
            }
        }
    }
}