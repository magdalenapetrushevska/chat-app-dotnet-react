using backend.DataService;
using backend.Models;
using Microsoft.AspNetCore.SignalR;

namespace backend.Hubs
{
    public class ChatHub : Hub
    {
        private readonly InMemoryDb _inMemoryDb;

        public ChatHub(InMemoryDb inMemoryDb)
        {
            _inMemoryDb = inMemoryDb;
        }   

        public async Task JoinChat(UserConnection userConnection)
        {
            await Clients.All.SendAsync("ReceiveMessage", "admin", $"{ userConnection.Username} has joined");        
        }

        public async Task JoinSpecificChatRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.ChatRoom);

            _inMemoryDb.UserConnections.TryAdd(Context.ConnectionId, userConnection);       

            await Clients.Group(userConnection.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin", $"{userConnection.Username} has joined {userConnection.ChatRoom}");
        }

        public async Task SendMessage(string message)
        {
            if(_inMemoryDb.UserConnections.TryGetValue(Context.ConnectionId, out UserConnection connection))
            {
                await Clients.Group(connection.ChatRoom).SendAsync("ReceiveSpecificMessage", connection.Username, message);
            }   
           


        }   

       
    }
}
