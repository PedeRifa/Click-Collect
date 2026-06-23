using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace projClickCollect.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    IdCliente = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeCliente = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.IdCliente);
                });

            migrationBuilder.CreateTable(
                name: "Lojas",
                columns: table => new
                {
                    IdLoja = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeLoja = table.Column<string>(type: "TEXT", nullable: false),
                    Uf = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lojas", x => x.IdLoja);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    IdProduto = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeProduto = table.Column<string>(type: "TEXT", nullable: false),
                    cliente = table.Column<int>(type: "INTEGER", nullable: false),
                    loja = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.IdProduto);
                    table.ForeignKey(
                        name: "FK_Produtos_Clientes_cliente",
                        column: x => x.cliente,
                        principalTable: "Clientes",
                        principalColumn: "IdCliente",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Produtos_Lojas_loja",
                        column: x => x.loja,
                        principalTable: "Lojas",
                        principalColumn: "IdLoja",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Clientes",
                columns: new[] { "IdCliente", "Email", "NomeCliente" },
                values: new object[,]
                {
                    { 1, "alice.campos@email.com", "Alice Campos" },
                    { 2, "bruno.h@email.com.br", "Bruno Henrique" },
                    { 3, "camila.rocha@provedor.com", "Camila Rocha" },
                    { 4, "daniel.machado@email.com", "Daniel Machado" },
                    { 5, "eduarda.nunes@email.com.br", "Eduarda Nunes" },
                    { 6, "felipe.costa@email.com", "Felipe Costa" },
                    { 7, "gabi.pereira@provedor.com", "Gabriela Pereira" },
                    { 8, "hugo.martins@email.com.br", "Hugo Martins" },
                    { 9, "isa.ribeiro@email.com", "Isabela Ribeiro" },
                    { 10, "jv.mendes@email.com.br", "João Vitor Mendes" },
                    { 11, "karina.silva@provedor.com", "Karina Silva" },
                    { 12, "leo.santos@email.com", "Leonardo Santos" },
                    { 13, "marcelo.moraes@email.com.br", "Marcelo Moraes" },
                    { 14, "nat.gomes@email.com", "Natália Gomes" },
                    { 15, "otavio.castro@provedor.com", "Otávio Castro" },
                    { 16, "paula.azevedo@email.com.br", "Paula Azevedo" },
                    { 17, "ricardo.barros@email.com", "Ricardo Barros" },
                    { 18, "rafael.teixeira@email.com.br", "Rafael Teixeira" },
                    { 19, "sofia.monteiro@provedor.com", "Sofia Monteiro" },
                    { 20, "thiago.assis@email.com", "Thiago Assis" }
                });

            migrationBuilder.InsertData(
                table: "Lojas",
                columns: new[] { "IdLoja", "NomeLoja", "Uf" },
                values: new object[,]
                {
                    { 1, "MC Donalds - Canoas, Centro", "RS" },
                    { 2, "Renner - Canoas, Mathias Velho", "RS" },
                    { 3, "NET - Canoas, Niterói", "RS" },
                    { 4, "Starbucks - Porto Alegre, Centro Histórico", "RS" },
                    { 5, "Royal Trudel - Porto Alegre, Menino Deus", "RS" },
                    { 6, "Mini-Kalzone - Porto Alegre, Sarandi", "RS" },
                    { 7, "Lauros - Gravataí, Centro", "RS" },
                    { 8, "Cremolatto - Gravataí, Castelo Branco", "RS" },
                    { 9, "Subway - Gravataí, Bernabé", "RS" },
                    { 10, "Nike - São Leopoldo, Feitoria", "RS" },
                    { 11, "Nike - São Leopoldo, Feitoria", "RS" },
                    { 12, "NewBalance - São Leopoldo, Vicentina", "RS" },
                    { 13, "São João - Novo Hamburgo, Canudos", "RS" },
                    { 14, "Panvel - Novo Hamburgo, Estância Velha", "RS" },
                    { 15, "Droga Raia - Novo Hamburgo, Boa Saúde", "RS" },
                    { 16, "Caça e Pesca - Nova Santa Rita, Berto Círio", "RS" },
                    { 17, "Droga Raia - Novo Hamburgo, Boa Saúde", "RS" }
                });

            migrationBuilder.InsertData(
                table: "Produtos",
                columns: new[] { "IdProduto", "cliente", "loja", "NomeProduto" },
                values: new object[,]
                {
                    { 1, 1, 1, "Big Mac" },
                    { 2, 2, 1, "McChicken" },
                    { 3, 3, 1, "Batata Frita Grande" },
                    { 4, 4, 1, "Refrigerante 500ml" },
                    { 5, 5, 1, "McFlurry Ovomaltine" },
                    { 6, 6, 2, "Camiseta Básica Branca" },
                    { 7, 7, 2, "Calça Jeans Skinny" },
                    { 8, 8, 2, "Jaqueta de Couro" },
                    { 9, 9, 2, "Tênis Casual Preto" },
                    { 10, 10, 2, "Vestido Floral" },
                    { 11, 11, 3, "Internet 500 Mega" },
                    { 12, 12, 3, "Combo TV + Internet" },
                    { 13, 13, 3, "Ponto Adicional TV" },
                    { 14, 14, 3, "Roteador Wi-Fi Mesh" },
                    { 15, 15, 3, "Plano Fixo Ilimitado" },
                    { 16, 16, 4, "Frappuccino Morango" },
                    { 17, 17, 4, "Cappuccino Tradicional" },
                    { 18, 18, 4, "Espresso Duplo" },
                    { 19, 19, 4, "Pão de Queijo" },
                    { 20, 20, 4, "Muffin de Mirtilo" },
                    { 21, 1, 5, "Trudel Doce de Leite" },
                    { 22, 2, 5, "Trudel de Nutella" },
                    { 23, 3, 5, "Trudel Tradicional" },
                    { 24, 4, 5, "Trudel com Morango" },
                    { 25, 5, 5, "Água Mineral Sem Gás" },
                    { 26, 6, 6, "Kalzone de Frango" },
                    { 27, 7, 6, "Kalzone de Calabresa" },
                    { 28, 8, 6, "Kalzone 4 Queijos" },
                    { 29, 9, 6, "Suco Natural Laranja" },
                    { 30, 10, 6, "Kalzone de Chocolate" },
                    { 31, 11, 7, "Xis Salada" },
                    { 32, 12, 7, "Cachorro Quente Duplo" },
                    { 33, 13, 7, "Pastel de Carne" },
                    { 34, 14, 7, "Refrigerante Lata 350ml" },
                    { 35, 15, 7, "Porção de Fritas" },
                    { 36, 16, 8, "Sorvete Chocolate 2L" },
                    { 37, 17, 8, "Picolé de Uva" },
                    { 38, 18, 8, "Sundae Caramelo" },
                    { 39, 19, 8, "Milkshake Morango" },
                    { 40, 20, 8, "Pote Flocos 1,5L" },
                    { 41, 1, 9, "Frango Teriyaki 15cm" },
                    { 42, 2, 9, "Baratíssimo de Frango" },
                    { 43, 3, 9, "BMT 30cm" },
                    { 44, 4, 9, "Cookie Gotas Chocolate" },
                    { 45, 5, 9, "Refrigerante Refil" },
                    { 46, 6, 10, "Tênis Air Max" },
                    { 47, 7, 10, "Camiseta Dri-FIT" },
                    { 48, 8, 10, "Calça de Moletom" },
                    { 49, 9, 10, "Meias Esportivas Cano Alto" },
                    { 50, 10, 10, "Bola de Futebol Campo" },
                    { 51, 11, 11, "Tênis Ultraboost" },
                    { 52, 12, 11, "Jaqueta Corta Vento" },
                    { 53, 13, 11, "Mochila Esportiva" },
                    { 54, 14, 11, "Shorts de Corrida" },
                    { 55, 15, 11, "Boné Logo Adidas" },
                    { 56, 16, 12, "Tênis 574 Casual" },
                    { 57, 17, 12, "Tênis 1080 Corrida" },
                    { 58, 18, 12, "Camiseta de Corrida" },
                    { 59, 19, 12, "Top Esportivo Feminino" },
                    { 60, 20, 12, "Viseira Ajustável" },
                    { 61, 1, 13, "Dipirona 500mg" },
                    { 62, 2, 13, "Shampoo Anticaspa Clear" },
                    { 63, 3, 13, "Desodorante Rexona" },
                    { 64, 4, 13, "Sabonete Líquido Dove" },
                    { 65, 5, 13, "Fralda Pampers M" },
                    { 66, 6, 14, "Vitamina C Efervescente" },
                    { 67, 7, 14, "Protetor Solar FPS 50" },
                    { 68, 8, 14, "Hidratante Corporal Corporal" },
                    { 69, 9, 14, "Escova de Dentes Macia" },
                    { 70, 10, 14, "Absorvente Noturno" },
                    { 71, 11, 15, "Paracetamol 750mg" },
                    { 72, 12, 15, "Creme Dental Colgate" },
                    { 73, 13, 15, "Álcool em Gel 70%" },
                    { 74, 14, 15, "Curativos Band-Aid" },
                    { 75, 15, 15, "Soro Fisiológico 500ml" },
                    { 76, 16, 16, "Vara de Pesca Carbono" },
                    { 77, 17, 16, "Isca Artificial Sapinho" },
                    { 78, 18, 16, "Barraca Camping 4 Pessoas" },
                    { 79, 19, 16, "Canivete Suíço 12 Funções" },
                    { 80, 20, 16, "Lanterna de Cabeça LED" },
                    { 81, 1, 17, "Ração Golden Cães 15kg" },
                    { 82, 2, 17, "Coleira Anti-pulgas" },
                    { 83, 3, 17, "Brinquedo Osso Borracha" },
                    { 84, 4, 17, "Petisco Bifinho Sabor Carne" },
                    { 85, 5, 17, "Areia Higiênica Gatos 4kg" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_cliente",
                table: "Produtos",
                column: "cliente");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_loja",
                table: "Produtos",
                column: "loja");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Lojas");
        }
    }
}
