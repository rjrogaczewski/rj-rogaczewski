function get(element) {
    return document.getElementById(element);
}
function openModel() {
    var model = get('dialog');
    var pic = get('modelPic');
    model.classList.add('visible');
    pic.classList.add('visible');
}
function closeModel() {
    var topic = get('editTopic');
    var content = get('editContent');
    var model = get('dialog');
    var pic = get('modelPic');
    topic.value = '';
    content.value = '';
    model.classList.remove('visible');
    pic.classList.remove('visible');
}
function save() {
    var topic = get('editTopic');
    var content = get('editContent');
    var text = get('displayBlog');
    var newTopic = document.createElement('h2')
    var newTopicText = document.createTextNode(topic.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(content.value);
    newTopic.appendChild(newTopicText);
    newContent.appendChild(newContentText);
    content.appendChild(newTopic);
    content.appendChild(newContent);
    closeModel();
}
window.addEventListener('load', function() {
    var newButton = get('button1');
    var cancelButton = get('cancelButton');
    var saveButton = get('saveButton');
    newButton.addEventListener('click', openModel);
    cancelButton.addEventListener('click', closeModel);
    saveButton.addEventListener('click', save)
});
