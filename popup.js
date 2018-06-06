let addTagsButton = document.getElementById('addTags');
let tags = document.getElementById('tags');
let url = window.location.href;

addTagsButton.onclick = function(element) {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        url = tabs[0].url;
		console.log(url);
		chrome.storage.sync.set({[url]: tags.value }, function(){
			window.close();
		});
    });
  };
  
window.onload = function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        url = tabs[0].url;
		console.log(url);
		chrome.storage.sync.get([url],function(result){
			if(result != null && result != undefined && result[url]!=undefined && result[url] !=null){
				tags.value = result[url];
			}
		});
	});
};