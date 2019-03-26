// JavaScript source code
handlers.GrantItemsToPlayer = function (args, context) {
    
    var grantPlayersRequest = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "1",
        ItemIds: [args.player[0], args.player[1]]
    });

    server.GrantItemsToUser(grantPlayersRequest);

    var resultitems = grantPlayersRequest.Item

    var message = "Hello " + currentPlayerId + "!";

}