using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BagsStore.Core.Models;

public class Product
{
    public Product(Guid Id, string name, string category, string image, decimal old_coffee, deciam new_price)
    {
        
    }

    public Guid Id { get; }
    public string name { get;set; }
    public string category { get;set; }

    public string image { get;set; }

    public decimal old_price { get;set; }

    public decimal new_price { get;set;}
}
