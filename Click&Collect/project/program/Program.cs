using click_collect;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(); 

var app = builder.Build();
app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.MapPost("/api/checkout", (PedidoDTO dados) => {
    using var db = new VendasContext();
    
    var cliente = new Cliente { 
        NomeCliente = dados.Nome, 
        Email = dados.Email 
    };
    
    db.Clientes.Add(cliente);
    db.SaveChanges(); 

    return Results.Ok(new { 
        Mensagem = "Cliente salvo com sucesso!", 
        ClienteId = cliente.IdCliente 
    });
});

app.Run();
public class PedidoDTO {
    public required string Nome { get; set; }
    public required string Email { get; set; }
    public required string TipoEntrega { get; set; } 
}