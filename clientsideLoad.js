async function clientsideLoad() {
    const [yamlconfig, yamldata] = await Promise.all([
        jQuery.get("config.yaml"),
        jQuery.get("data.yaml"),
    ]);
    window.data = jsyaml.load(yamlconfig);
    window.data.characters = jsyaml.load(yamldata);

    jQuery("#loading").remove();
    jQuery("body > header").show();
    jQuery("body > footer").show();
    jQuery("#content").show();

    window.document.title = data.title;
    jQuery("body > header h1").html(data.title);
    jQuery("body > header .lead").html(data.lead);
    jQuery(".welcome-block .text").html(data.welcome);
    jQuery("body > footer .container").html(data.attribution);
}