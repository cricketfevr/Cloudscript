
handlers.GrantItemsToPlayer = function (args, context) {
    
    var grantPlayersRequest = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "1",
        ItemIds: ["Dhoni", "RohitSharma"]
    });

    server.GrantItemsToUser(grantPlayersRequest);

    var resultitems = grantPlayersRequest.Item

    var message = "Hello " + currentPlayerId + "!";

}
