#1.1
###############################Layout 01#################################
*{
  margin: 0;
  padding: 0;
  font-size: 16px;
}
body{
  margin: auto;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background-color: rgb(8, 0, 14);
  color: white;
  text-align: center;
  background-image: url(https://cdn.pixabay.com/photo/2020/08/12/19/37/autumn-5483537_960_720.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center ;
}
div.fundo{
  background: rgba(0, 0, 0, 0.44);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.6px);
  -webkit-backdrop-filter: blur(3.6px);
  border: 1px solid rgba(0, 0, 0, 0.25);
  height: 600px;
}

h1{
  margin-top: 20px;
  text-align: center;
  font-size: 2.5em;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.625);
}

p{
  margin-bottom: 30px;
  color: white;
  font-size: 1em;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.625);
}

input#perguntaTxt{
  margin-bottom: 15px;
  background-color: rgba(33, 14, 91, 0.337);
  border-style: none;
  border-radius: 15px;
  box-shadow: 1px 1px 5px rgba(46, 8, 123, 0.474);
  width: 350px;
  height: 30px;
  color: white;
  text-indent: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.625);
}

input#perguntaTxt::placeholder{
  color: white;
  padding: 10px;
}
button{
  margin: 15px;
  height: 50px;
  width: 200px;
  background-color: transparent;
  color: white;
  border-radius: 20px;
  border-style: solid;
  border-color: rgb(122, 86, 181);
  box-shadow: 1px 1px 10px rgba(46, 8, 123, 0.474);
}
button:hover{
  background-color: rgba(166, 148, 206, 0.173);
  border-color: rgb(236, 213, 255);
  color:rgb(236, 213, 255);
  box-shadow: 1px 1px 30px rgba(46, 8, 123, 0.474);
}
#########################################################################