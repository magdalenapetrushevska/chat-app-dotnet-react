using backend.Models;
using System.Collections.Concurrent;

namespace backend.DataService
{
    public class InMemoryDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _userConnections = new ConcurrentDictionary<string, UserConnection>(); 
        
        public ConcurrentDictionary<string, UserConnection> UserConnections => _userConnections;  
    }
}
