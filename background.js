chrome.contextMenus.removeAll(function() {             //Comes in right click but doesnt work now
chrome.contextMenus.create ({
    "title": "View The Profile Picture",
    "onclick": tabFinder()
});
})

document.getElementById("instaSearch").addEventListener("click",tabFinder)            //Checks if button is pressed if pressed it calls tabFinder function


function tabFinder(){                                                                  //Gets the current tab
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
    function(tabs){
            insta(tabs[0].url);                 //Sends the current tab to insta function
    });
}

function insta(tab){                                                //Uses instagram APi to get the link of  the profile pic
    // let link = document.getElementById('game-name').value
  


    let link = tab
    //console.log(link)
     //let haha = window.location
     //console.log(haha)
     let apiLink = link+ "?__a=1"
     $.get(apiLink)
     .done(function(data) { 

   // getting the url
   var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];                       //Fetches the link 
     window.open(photoURL,"_blank")                               //Opens new window with the details
}) 


}



