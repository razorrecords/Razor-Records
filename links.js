const RAZOR_LINKS={
 youtube:'https://www.youtube.com/@RazorRecordsMusic',
 instagram:'https://www.instagram.com/razorrecords.music/'
};
document.querySelectorAll('[data-youtube]').forEach(a=>a.href=RAZOR_LINKS.youtube);
document.querySelectorAll('[data-instagram]').forEach(a=>a.href=RAZOR_LINKS.instagram);
