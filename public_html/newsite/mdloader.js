const anaSrc = 'https://raw.githubusercontent.com/Subspace620/SubspaceNewSite/Markdown/public_html/newsite/portfolio/AnaJones.md';

async function loadAna() {
    const response = await fetch( anaSrc, {} );
    const text = response.text();

    let target = document.getElementsByTagName( 'AnaJones' )[0];
    let converter = new showdown.Converter();
    let html = converter.makeHtml( text );

    target.innerHTML = html;

    console.log( html );
}