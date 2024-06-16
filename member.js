function skillsMember() {
    // Set the path to the file
    var path = 'member.js';
    // Load the file
    $.getScript(path, function() {
        // The file has been loaded
        console.log('Member.js has been loaded');
    });
}