// JavaScript source code
handlers.GrantItemsToPlayer = function (args, context) {
    
    var grantPlayersRequest = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "1",
        ItemIds: [args.player]
    });

    server.GrantItemsToUser(grantPlayersRequest);

    var resultitems = grantPlayersRequest.Item

    var message = "Hello " + currentPlayerId + "!";

}
