using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using aspnetapp.Models;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using System;
using System.Runtime.Serialization.Json;
using System.Text ;
using Newtonsoft.Json ; 
using System.Json;
using Autofac ;   //https://github.com/zhenzhenkeai/Asp.Net-MVC-EF-Demo
namespace aspnetapp.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class TodoController : Controller
    {
        private readonly TodoContext _context;
        private readonly string _SqlPOST = "http://35.163.140.165:1114/sql";

        public TodoController(TodoContext context)
        {
            _context = context;

            if (_context.TodoItems.Count() == 0)
            {
                _context.TodoItems.Add(new TodoItem { Name = "Itema" ,  });
                _context.TodoItems.Add(new TodoItem { Name = "Item2" });
                _context.SaveChanges();
            }
        }
        
    
        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(long id)
        {
            var item = _context.TodoItems.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    
        [HttpGet("getter")]
        public IActionResult GetB()
        {
            return new ObjectResult(ProcessRepositories().Result);
        }
        
        
        [HttpPost("PostToFlask")]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult PostToFlask([FromBody] RequestObj obj)
        {
            Console.WriteLine(obj.sqlStatement) ;
            return new ObjectResult(Post(obj.sqlStatement).Result);
        }
        
        //https://github.com/dotnet/docs/blob/master/samples/csharp/getting-started/console-webapiclient/Program.cs
        private static async Task<List<ResponseObj>> ProcessRepositories()
        {
            var client = new HttpClient();
            var serializer = new DataContractJsonSerializer(typeof(List<ResponseObj>));
            client.DefaultRequestHeaders.Accept.Clear();
            var stringTask = client.GetStringAsync("http://35.163.140.165:1114/get");
            var streamTask = client.GetStreamAsync("http://35.163.140.165:1114/get");
            var repositories = serializer.ReadObject(await streamTask) as List<ResponseObj>;
            return repositories;
        }
        
        private static async Task<string> Post(string sqlString)
        {
            HttpClient httpClient = new HttpClient(); 
            httpClient.DefaultRequestHeaders.Accept.Clear();
            string resourceAddress = _SqlPOST; 
            var stringContent = new StringContent(JsonConvert.SerializeObject(new RequestObj {sqlStatement =sqlString} ), Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync(resourceAddress, stringContent);
            var contents = await response.Content.ReadAsStringAsync(); // https://stackoverflow.com/questions/26597665/how-to-get-content-body-from-a-httpclient-call
            return contents;
        }
    }
}
