//GET REQUEST

function httpRequest(){
    this.http = new XMLHttpRequest();
}

httpRequest.prototype.get = function(url, callback){

    this.http.open("GET", url, true);
    let self = this;
    this.http.onload = function(){

        if(self.http.status === 200){
            callback(null,this.responseText);
        }
        else{
            callback(`Error: ` + self.http.status);
        }
    }

    this.http.send();
}

//POST REQUEST

httpRequest.prototype.post = function(url,data, callback){

    this.http.open("POST", url,true);

    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = function(){

        callback(null,this.responseText);
 
    }

    this.http.send(JSON.stringify(data));
}

//PUT REQUEST

httpRequest.prototype.put = function(url,data, callback){

    this.http.open("PUT", url,true);

    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = function(){

        callback(null,this.responseText);
 
    }

    this.http.send(JSON.stringify(data));
}

// DELETE REQUEST

httpRequest.prototype.delete = function(url, callback){

    this.http.open("DELETE", url, true);
    let self = this;
    this.http.onload = function(){

        if(self.http.status === 200){
            callback(null,"POST DELETED");
        }
        else{
            callback(`Error: ` + self.http.status);
        }
    }

    this.http.send();
}
