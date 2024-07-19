const reproductorMusica = {
    estado: "apagado",

    play: function(cancion)   {
        if (this.estado === "apagado") {
            console.log(`Comenzando reproducción de la canción ${cancion}...`);
            // Cambiar el estado
            this.estado = "play";
        } else {
            console.log("...Canción en ejecución: Stop para terminar");
        }
    },

    stop: function() {
        if (this.estado === "apagado") {
            console.log("El reproductor ya está apagado");
        } else {
            console.log("Apagando reproductor");
            this.estado = "apagado";
        }
    },

    getEstado: function() {
        return this.estado;
    },

    setEstado: function(estado) {
        this.estado = estado;
    }
};


reproductorMusica.play( "Himno Nacional"); 
//reproductorMusica.stop(); 
//reproductorMusica.stop(); 
