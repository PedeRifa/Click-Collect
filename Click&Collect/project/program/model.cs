using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace click_collect
{
    public class Cliente
    {
        #region Atributos
        public int IdCliente {get; set;}
        public required string NomeCliente {get; set;}
        public required string Email {get; set;}
        public List<Produto> Produtos {get; set;} = new();
        #endregion
    }

    public class Loja
    {
        #region Atributos
        public int IdLoja {get; set;}
        public required string NomeLoja {get; set;}
        public required string Uf {get; set;}
        public List<Produto> Produtos {get; set;} = new();
        #endregion
    }

    public class Produto
    {
        #region Atributos
        public int IdProduto {get; set;}
        public required string NomeProduto {get; set;}
        public int ClienteId { get; set; }
        public Cliente? Cliente { get; set; }
        public int LojaId { get; set; }
        public Loja? Loja { get; set; }
        #endregion
    }
}