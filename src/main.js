imports.gi.versions.Gdk = '4.0';
imports.gi.versions.Gtk = '4.0';

const { Gio, Gst } = imports.gi;

Gst.init(null);
Gio._promisify(Gio._LocalFilePrototype, 'load_bytes_async', 'load_bytes_finish');
Gio._promisify(Gio._LocalFilePrototype, 'make_directory_async', 'make_directory_finish');
Gio._promisify(Gio._LocalFilePrototype, 'replace_contents_bytes_async', 'replace_contents_finish');

const { App } = imports.src.app;

function main(argv)
{
    new App().run(argv);
}
