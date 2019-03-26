// JavaScript source code
handlers.GrantItemsToPlayer = function (args, context) {
    
    var grantPlayersRequest = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "1",
        ItemIds: [args.p1, args.p2]]
    });

    server.GrantItemsToUser(grantPlayersRequest);


}
