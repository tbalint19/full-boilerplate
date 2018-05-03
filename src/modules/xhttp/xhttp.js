export const httpGet  = (url) => {
 return new Promise(function (resolve, reject) {
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       resolve(JSON.parse(xhttp.responseText))
     } else if (this.readyState == 4 && this.status !== 200) {
       reject({ status: this.status, statusText: xhttp.statusText })
     }
   };
   xhttp.open("GET", url, true);
   xhttp.setRequestHeader("Authorization", localStorage.getItem("auth-token"))
   xhttp.send();
 })
}

export const httpPost = (url, data) => {
 return new Promise(function (resolve, reject) {
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       resolve(JSON.parse(xhttp.responseText))
     } else if (this.readyState == 4 && this.status !== 200) {
       reject({ status: this.status, statusText: xhttp.statusText })
     }
   };
   xhttp.open("POST", url, true);
   xhttp.setRequestHeader("Content-type", "application/json")
   xhttp.setRequestHeader("Authorization", localStorage.getItem("auth-token"))
   xhttp.send(JSON.stringify(data));
 })
}
