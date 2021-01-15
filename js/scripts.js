$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const heroes = $("select#heroes").val();
    const phrase = $("select#phrase").val();
    const lightsaber = $("select#lightsaber").val();
    const force = $("select#force").val();
    
    if (heroes === "Rey Skywalker" && lightsaber === "Crossguard saber") {
      $('#Kylo').show();
    } else if (heroes === "Rey Skywalker" && force === "Freeze blaster bolt") {
      $('#Kylo').show();
    } else if (phrase === "Let the past die." && lightsaber === "Crossguard saber") {
      $('#Kylo').show();
    } else if (phrase === "NOOOO!" && force === "Force choke") {
      $('#Vader').show(); 
    } else if ((heroes === "Luke Skywalker" || "Obi-Wan Kanobi") && force === "Force choke") {
      $('#Vader').show(); 
    } else if (phrase === "Power! UNLIMITED POWER!" && force === "Force lightning") {
      $('#Sheev').show(); 
    } else if (lightsaber === "Single bladed" && force === "Force lightning") {
      $('#Sheev').show(); 
    } else if (lightsaber === "Double bladed" || (heroes === "Obi-Wan Kenobi" && phrase === "KENOBIIII")) {
      $('#Maul').show();
    } else if (lightsaber === "Lightsaber? Mesa no needa lightsaber!") {
      $('#JarJar').show();
    } else {
      $('#Vader').show();
    }
    event.preventDefault();
    });
  });