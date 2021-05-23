const url1 = 'https://drive.google.com/file/d/1L-KNV6oSnNlebSbHEtm9QJDiy-KFrhMg/view?usp=sharing'
const url2 = 'https://raw.githubusercontent.com/Subspace620/SubspaceShowdown/main/public_html/executive.md'
const url3 = 'https://www.googleapis.com/drive/v2/files/1L-KNV6oSnNlebSbHEtm9QJDiy-KFrhMg'
var credentials = {}

async function run1() {
	const response = await fetch(url1, credentials);
	const text = await response.text();
	
	target = document.getElementsByTagName('main')[0],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text);
	
	target.innerHTML = html;
}
async function run2() {
	const response = await fetch(url2, credentials);
	const text = await response.text();
	
	target = document.getElementsByTagName('main')[0],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text);
	
	target.innerHTML = html;
}
async function run3() {
	const response = await fetch(url3, credentials);
	const text = await response.text();
	
	target = document.getElementsByTagName('main')[0],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text);
	
	target.innerHTML = html;
}
function cred_on() {
	credentials = {
	'Access-Control-Allow-Origin':'*',
	'Access-Control-Allow-Credentials':'true',
	'origin':'https://sites.ualberta.ca/~subspace/',
	'method': 'GET',
	'Content-Type':'text/plain'
	}
}
function cred_off() {
	credentials = {}
}
cred_on()