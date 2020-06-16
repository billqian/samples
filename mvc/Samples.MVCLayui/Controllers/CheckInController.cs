using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Samples.MVCLayui.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Samples.MVCLayui.Controllers
{
    public class CheckInController : Controller
    {
        private readonly ILogger<CheckInController> _logger;

        public CheckInController(ILogger<CheckInController> logger)
        {
            _logger = logger;
        }

        public IActionResult Mobile()
        {
            return View();
        }

        public IActionResult IDCard()
        {
            return View();
        }

        public IActionResult Order() 
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
