// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.backup');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.backup.fs = cljs.nodejs.require.call(null,"fs");
hoard.backup.to_file = (function to_file(file_name,data){
var data_as_json = JSON.stringify(data);
return hoard.backup.fs.writeFile.call(null,file_name,data_as_json,((function (data_as_json){
return (function (err){
if(cljs.core.truth_(err)){
throw err;
} else {
return console.log("Data written to file!");
}
});})(data_as_json))
);
});
