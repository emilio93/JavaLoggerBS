package com.dvlpxl.logbs;

import java.util.logging.Logger;

/**
 * Clase para probar el Logger.
 * @author Emilio Rojas
 * @version 1.0 9/2/2016.
 */
public class Test {

    /**
     * El Logger para la clase Main.
     * Se debe incluir esta linea al inico de cada clase.
     * notese que se utiliza el nombre de la clase, ie. Main.class.getName() en
     * este caso.
     */
    private static final Logger log = Logger.getLogger(Main.class.getName());

    /**
     * El método main se ejecuta al ejecutar la aplicación.
     *
     * @param args Parámetros.
     */
    public static void main(String[] args) {
        // Esta línea inicializa el log y permite que se guarde el archivo xml.
        Log.start(log);
        // Se loguea un mensaje de información.
        log.info("Program started.");
        // Se loguea un mensaje de información.
        log.info("Lorem ipsum dolor sit amet, consectetur adipisicing elit, "  +
                 "sed do eiusmod tempor incididunt ut labore et dolore magna"  +
                 " aliqua. Ut enim ad minim veniam, quis nostrud exercitation" +
                 " ullamco laboris nisi ut aliquip ex ea commodo consequat. "  +
                 "Duis aute irure dolor in reprehenderit in voluptate velit "  +
                 "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint" +
                 " occaecat cupidatat non proident, sunt in culpa qui officia" +
                 " deserunt mollit anim id est laborum.");
    }
}
