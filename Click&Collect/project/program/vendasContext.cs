using Microsoft.EntityFrameworkCore;
namespace click_collect
{
    public class VendasContext : DbContext
    {
        public DbSet<Cliente> Clientes {get; set;}
        public DbSet<Loja> Lojas {get; set;}
        public DbSet<Produto> Produtos {get; set;}
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=sistema.db");

        #region Métodos
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>().HasKey(c => c.IdCliente);
            modelBuilder.Entity<Loja>().HasKey(l => l.IdLoja);
            modelBuilder.Entity<Produto>().HasKey(p => p.IdProduto);
            modelBuilder.Entity<Produto>()
                .HasOne(p => p.Cliente)
                .WithMany(c => c.Produtos)
                .HasForeignKey(p => p.ClienteId);

            modelBuilder.Entity<Produto>()
                .HasOne(p => p.Loja)
                .WithMany(l => l.Produtos)
                .HasForeignKey(p => p.LojaId);

            modelBuilder.Entity<Produto>()
                .Property(p => p.ClienteId)
                .HasColumnName("cliente");

            modelBuilder.Entity<Produto>()
                .Property(p => p.LojaId)
                .HasColumnName("loja");

            modelBuilder.Entity<Cliente>().HasData(
                new Cliente { IdCliente = 1, NomeCliente = "Alice Campos", Email = "alice.campos@email.com" },
                new Cliente { IdCliente = 2, NomeCliente = "Bruno Henrique", Email = "bruno.h@email.com.br" },
                new Cliente { IdCliente = 3, NomeCliente = "Camila Rocha", Email = "camila.rocha@provedor.com" },
                new Cliente { IdCliente = 4, NomeCliente = "Daniel Machado", Email = "daniel.machado@email.com" },
                new Cliente { IdCliente = 5, NomeCliente = "Eduarda Nunes", Email = "eduarda.nunes@email.com.br" },
                new Cliente { IdCliente = 6, NomeCliente = "Felipe Costa", Email = "felipe.costa@email.com" },
                new Cliente { IdCliente = 7, NomeCliente = "Gabriela Pereira", Email = "gabi.pereira@provedor.com" },
                new Cliente { IdCliente = 8, NomeCliente = "Hugo Martins", Email = "hugo.martins@email.com.br" },
                new Cliente { IdCliente = 9, NomeCliente = "Isabela Ribeiro", Email = "isa.ribeiro@email.com" },
                new Cliente { IdCliente = 10, NomeCliente = "João Vitor Mendes", Email = "jv.mendes@email.com.br" },
                new Cliente { IdCliente = 11, NomeCliente = "Karina Silva", Email = "karina.silva@provedor.com" },
                new Cliente { IdCliente = 12, NomeCliente = "Leonardo Santos", Email = "leo.santos@email.com" },
                new Cliente { IdCliente = 13, NomeCliente = "Marcelo Moraes", Email = "marcelo.moraes@email.com.br" },
                new Cliente { IdCliente = 14, NomeCliente = "Natália Gomes", Email = "nat.gomes@email.com" },
                new Cliente { IdCliente = 15, NomeCliente = "Otávio Castro", Email = "otavio.castro@provedor.com" },
                new Cliente { IdCliente = 16, NomeCliente = "Paula Azevedo", Email = "paula.azevedo@email.com.br" },
                new Cliente { IdCliente = 17, NomeCliente = "Ricardo Barros", Email = "ricardo.barros@email.com" },
                new Cliente { IdCliente = 18, NomeCliente = "Rafael Teixeira", Email = "rafael.teixeira@email.com.br" },
                new Cliente { IdCliente = 19, NomeCliente = "Sofia Monteiro", Email = "sofia.monteiro@provedor.com" },
                new Cliente { IdCliente = 20, NomeCliente = "Thiago Assis", Email = "thiago.assis@email.com" }
            );

            modelBuilder.Entity<Loja>().HasData(
                new Loja { IdLoja = 1, NomeLoja = "MC Donalds - Canoas, Centro", Uf = "RS" },
                new Loja { IdLoja = 2, NomeLoja = "Renner - Canoas, Mathias Velho", Uf = "RS" },
                new Loja { IdLoja = 3, NomeLoja = "NET - Canoas, Niterói", Uf = "RS" },
                new Loja { IdLoja = 4, NomeLoja = "Starbucks - Porto Alegre, Centro Histórico", Uf = "RS" },
                new Loja { IdLoja = 5, NomeLoja = "Royal Trudel - Porto Alegre, Menino Deus", Uf = "RS" },
                new Loja { IdLoja = 6, NomeLoja = "Mini-Kalzone - Porto Alegre, Sarandi", Uf = "RS" },
                new Loja { IdLoja = 7, NomeLoja = "Lauros - Gravataí, Centro", Uf = "RS" },
                new Loja { IdLoja = 8, NomeLoja = "Cremolatto - Gravataí, Castelo Branco", Uf = "RS" },
                new Loja { IdLoja = 9, NomeLoja = "Subway - Gravataí, Bernabé", Uf = "RS" },
                new Loja { IdLoja = 10, NomeLoja = "Nike - São Leopoldo, Feitoria", Uf = "RS" },
                new Loja { IdLoja = 11, NomeLoja = "Nike - São Leopoldo, Feitoria", Uf = "RS" },
                new Loja { IdLoja = 12, NomeLoja = "NewBalance - São Leopoldo, Vicentina", Uf = "RS" },
                new Loja { IdLoja = 13, NomeLoja = "São João - Novo Hamburgo, Canudos", Uf = "RS" },
                new Loja { IdLoja = 14, NomeLoja = "Panvel - Novo Hamburgo, Estância Velha", Uf = "RS" },
                new Loja { IdLoja = 15, NomeLoja = "Droga Raia - Novo Hamburgo, Boa Saúde", Uf = "RS" },
                new Loja { IdLoja = 16, NomeLoja = "Caça e Pesca - Nova Santa Rita, Berto Círio", Uf = "RS" },
                new Loja { IdLoja = 17, NomeLoja = "Droga Raia - Novo Hamburgo, Boa Saúde", Uf = "RS" }
            );

            modelBuilder.Entity<Produto>().HasData(
                new Produto { IdProduto = 1, NomeProduto = "Big Mac", ClienteId = 1, LojaId = 1 },
                new Produto { IdProduto = 2, NomeProduto = "McChicken", ClienteId = 2, LojaId = 1 },
                new Produto { IdProduto = 3, NomeProduto = "Batata Frita Grande", ClienteId = 3, LojaId = 1 },
                new Produto { IdProduto = 4, NomeProduto = "Refrigerante 500ml", ClienteId = 4, LojaId = 1 },
                new Produto { IdProduto = 5, NomeProduto = "McFlurry Ovomaltine", ClienteId = 5, LojaId = 1 },

                new Produto { IdProduto = 6, NomeProduto = "Camiseta Básica Branca", ClienteId = 6, LojaId = 2 },
                new Produto { IdProduto = 7, NomeProduto = "Calça Jeans Skinny", ClienteId = 7, LojaId = 2 },
                new Produto { IdProduto = 8, NomeProduto = "Jaqueta de Couro", ClienteId = 8, LojaId = 2 },
                new Produto { IdProduto = 9, NomeProduto = "Tênis Casual Preto", ClienteId = 9, LojaId = 2 },
                new Produto { IdProduto = 10, NomeProduto = "Vestido Floral", ClienteId = 10, LojaId = 2 },

                new Produto { IdProduto = 11, NomeProduto = "Internet 500 Mega", ClienteId = 11, LojaId = 3 },
                new Produto { IdProduto = 12, NomeProduto = "Combo TV + Internet", ClienteId = 12, LojaId = 3 },
                new Produto { IdProduto = 13, NomeProduto = "Ponto Adicional TV", ClienteId = 13, LojaId = 3 },
                new Produto { IdProduto = 14, NomeProduto = "Roteador Wi-Fi Mesh", ClienteId = 14, LojaId = 3 },
                new Produto { IdProduto = 15, NomeProduto = "Plano Fixo Ilimitado", ClienteId = 15, LojaId = 3 },

                new Produto { IdProduto = 16, NomeProduto = "Frappuccino Morango", ClienteId = 16, LojaId = 4 },
                new Produto { IdProduto = 17, NomeProduto = "Cappuccino Tradicional", ClienteId = 17, LojaId = 4 },
                new Produto { IdProduto = 18, NomeProduto = "Espresso Duplo", ClienteId = 18, LojaId = 4 },
                new Produto { IdProduto = 19, NomeProduto = "Pão de Queijo", ClienteId = 19, LojaId = 4 },
                new Produto { IdProduto = 20, NomeProduto = "Muffin de Mirtilo", ClienteId = 20, LojaId = 4 },

                new Produto { IdProduto = 21, NomeProduto = "Trudel Doce de Leite", ClienteId = 1, LojaId = 5 },
                new Produto { IdProduto = 22, NomeProduto = "Trudel de Nutella", ClienteId = 2, LojaId = 5 },
                new Produto { IdProduto = 23, NomeProduto = "Trudel Tradicional", ClienteId = 3, LojaId = 5 },
                new Produto { IdProduto = 24, NomeProduto = "Trudel com Morango", ClienteId = 4, LojaId = 5 },
                new Produto { IdProduto = 25, NomeProduto = "Água Mineral Sem Gás", ClienteId = 5, LojaId = 5 },

                new Produto { IdProduto = 26, NomeProduto = "Kalzone de Frango", ClienteId = 6, LojaId = 6 },
                new Produto { IdProduto = 27, NomeProduto = "Kalzone de Calabresa", ClienteId = 7, LojaId = 6 },
                new Produto { IdProduto = 28, NomeProduto = "Kalzone 4 Queijos", ClienteId = 8, LojaId = 6 },
                new Produto { IdProduto = 29, NomeProduto = "Suco Natural Laranja", ClienteId = 9, LojaId = 6 },
                new Produto { IdProduto = 30, NomeProduto = "Kalzone de Chocolate", ClienteId = 10, LojaId = 6 },

                new Produto { IdProduto = 31, NomeProduto = "Xis Salada", ClienteId = 11, LojaId = 7 },
                new Produto { IdProduto = 32, NomeProduto = "Cachorro Quente Duplo", ClienteId = 12, LojaId = 7 },
                new Produto { IdProduto = 33, NomeProduto = "Pastel de Carne", ClienteId = 13, LojaId = 7 },
                new Produto { IdProduto = 34, NomeProduto = "Refrigerante Lata 350ml", ClienteId = 14, LojaId = 7 },
                new Produto { IdProduto = 35, NomeProduto = "Porção de Fritas", ClienteId = 15, LojaId = 7 },

                new Produto { IdProduto = 36, NomeProduto = "Sorvete Chocolate 2L", ClienteId = 16, LojaId = 8 },
                new Produto { IdProduto = 37, NomeProduto = "Picolé de Uva", ClienteId = 17, LojaId = 8 },
                new Produto { IdProduto = 38, NomeProduto = "Sundae Caramelo", ClienteId = 18, LojaId = 8 },
                new Produto { IdProduto = 39, NomeProduto = "Milkshake Morango", ClienteId = 19, LojaId = 8 },
                new Produto { IdProduto = 40, NomeProduto = "Pote Flocos 1,5L", ClienteId = 20, LojaId = 8 },

                new Produto { IdProduto = 41, NomeProduto = "Frango Teriyaki 15cm", ClienteId = 1, LojaId = 9 },
                new Produto { IdProduto = 42, NomeProduto = "Baratíssimo de Frango", ClienteId = 2, LojaId = 9 },
                new Produto { IdProduto = 43, NomeProduto = "BMT 30cm", ClienteId = 3, LojaId = 9 },
                new Produto { IdProduto = 44, NomeProduto = "Cookie Gotas Chocolate", ClienteId = 4, LojaId = 9 },
                new Produto { IdProduto = 45, NomeProduto = "Refrigerante Refil", ClienteId = 5, LojaId = 9 },

                new Produto { IdProduto = 46, NomeProduto = "Tênis Air Max", ClienteId = 6, LojaId = 10 },
                new Produto { IdProduto = 47, NomeProduto = "Camiseta Dri-FIT", ClienteId = 7, LojaId = 10 },
                new Produto { IdProduto = 48, NomeProduto = "Calça de Moletom", ClienteId = 8, LojaId = 10 },
                new Produto { IdProduto = 49, NomeProduto = "Meias Esportivas Cano Alto", ClienteId = 9, LojaId = 10 },
                new Produto { IdProduto = 50, NomeProduto = "Bola de Futebol Campo", ClienteId = 10, LojaId = 10 },

                new Produto { IdProduto = 51, NomeProduto = "Tênis Ultraboost", ClienteId = 11, LojaId = 11 },
                new Produto { IdProduto = 52, NomeProduto = "Jaqueta Corta Vento", ClienteId = 12, LojaId = 11 },
                new Produto { IdProduto = 53, NomeProduto = "Mochila Esportiva", ClienteId = 13, LojaId = 11 },
                new Produto { IdProduto = 54, NomeProduto = "Shorts de Corrida", ClienteId = 14, LojaId = 11 },
                new Produto { IdProduto = 55, NomeProduto = "Boné Logo Adidas", ClienteId = 15, LojaId = 11 },

                new Produto { IdProduto = 56, NomeProduto = "Tênis 574 Casual", ClienteId = 16, LojaId = 12 },
                new Produto { IdProduto = 57, NomeProduto = "Tênis 1080 Corrida", ClienteId = 17, LojaId = 12 },
                new Produto { IdProduto = 58, NomeProduto = "Camiseta de Corrida", ClienteId = 18, LojaId = 12 },
                new Produto { IdProduto = 59, NomeProduto = "Top Esportivo Feminino", ClienteId = 19, LojaId = 12 },
                new Produto { IdProduto = 60, NomeProduto = "Viseira Ajustável", ClienteId = 20, LojaId = 12 },

                new Produto { IdProduto = 61, NomeProduto = "Dipirona 500mg", ClienteId = 1, LojaId = 13 },
                new Produto { IdProduto = 62, NomeProduto = "Shampoo Anticaspa Clear", ClienteId = 2, LojaId = 13 },
                new Produto { IdProduto = 63, NomeProduto = "Desodorante Rexona", ClienteId = 3, LojaId = 13 },
                new Produto { IdProduto = 64, NomeProduto = "Sabonete Líquido Dove", ClienteId = 4, LojaId = 13 },
                new Produto { IdProduto = 65, NomeProduto = "Fralda Pampers M", ClienteId = 5, LojaId = 13 },

                new Produto { IdProduto = 66, NomeProduto = "Vitamina C Efervescente", ClienteId = 6, LojaId = 14 },
                new Produto { IdProduto = 67, NomeProduto = "Protetor Solar FPS 50", ClienteId = 7, LojaId = 14 },
                new Produto { IdProduto = 68, NomeProduto = "Hidratante Corporal Corporal", ClienteId = 8, LojaId = 14 },
                new Produto { IdProduto = 69, NomeProduto = "Escova de Dentes Macia", ClienteId = 9, LojaId = 14 },
                new Produto { IdProduto = 70, NomeProduto = "Absorvente Noturno", ClienteId = 10, LojaId = 14 },

                new Produto { IdProduto = 71, NomeProduto = "Paracetamol 750mg", ClienteId = 11, LojaId = 15 },
                new Produto { IdProduto = 72, NomeProduto = "Creme Dental Colgate", ClienteId = 12, LojaId = 15 },
                new Produto { IdProduto = 73, NomeProduto = "Álcool em Gel 70%", ClienteId = 13, LojaId = 15 },
                new Produto { IdProduto = 74, NomeProduto = "Curativos Band-Aid", ClienteId = 14, LojaId = 15 },
                new Produto { IdProduto = 75, NomeProduto = "Soro Fisiológico 500ml", ClienteId = 15, LojaId = 15 },

                new Produto { IdProduto = 76, NomeProduto = "Vara de Pesca Carbono", ClienteId = 16, LojaId = 16 },
                new Produto { IdProduto = 77, NomeProduto = "Isca Artificial Sapinho", ClienteId = 17, LojaId = 16 },
                new Produto { IdProduto = 78, NomeProduto = "Barraca Camping 4 Pessoas", ClienteId = 18, LojaId = 16 },
                new Produto { IdProduto = 79, NomeProduto = "Canivete Suíço 12 Funções", ClienteId = 19, LojaId = 16 },
                new Produto { IdProduto = 80, NomeProduto = "Lanterna de Cabeça LED", ClienteId = 20, LojaId = 16 },

                new Produto { IdProduto = 81, NomeProduto = "Ração Golden Cães 15kg", ClienteId = 1, LojaId = 17 },
                new Produto { IdProduto = 82, NomeProduto = "Coleira Anti-pulgas", ClienteId = 2, LojaId = 17 },
                new Produto { IdProduto = 83, NomeProduto = "Brinquedo Osso Borracha", ClienteId = 3, LojaId = 17 },
                new Produto { IdProduto = 84, NomeProduto = "Petisco Bifinho Sabor Carne", ClienteId = 4, LojaId = 17 },
                new Produto { IdProduto = 85, NomeProduto = "Areia Higiênica Gatos 4kg", ClienteId = 5, LojaId = 17 }
            );
        #endregion
        }
    }
}