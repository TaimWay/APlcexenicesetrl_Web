function File_List(FilePath) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.GetFolder(FilePath);
    var fc = new Enumerator(f.files);
    var s = "";
    for (; !fc.atEnd(); fc.moveNext())
    {
        s += fc.item();
    s += "<br/>";
    }
    fk = new Enumerator(f.SubFolders);
    for (; !fk.atEnd(); fk.moveNext())
    {
        s += fk.item();
        s += "<br/>";
    }
    textarea.innerHTML = s
}
