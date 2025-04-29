window.addEventListener('DOMContentLoaded', () => {
  // Partículas rojas
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ff0000" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3 },
      line_linked: { enable: false },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });

  // Cursor mágico
  document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
  });

  // Carta completa
  document.getElementById('app').innerHTML = `
    <div class="carta">
      <div class="corazon">❤️</div>
      <div class="mensaje">
        Feliz cumpleaños, amor.<br><br>
        Quiero desearte unos hermosos 25 años y que en esta etapa de tu vida seas tan feliz como sea posible. Que puedas cumplir todos esos objetivos que te ponés en mente y que todo lo que te toque vivir sea éxito y suerte. Incluso si no es conmigo, o si alguna vez nuestros caminos se separan, nunca voy a dejar de desearte felicidad, y que cada 28 de abril puedas decir que fue otro año valioso, con muchos motivos para agradecer.<br><br>
        Sos el amor de mi vida. Aunque solo te tuve durante casi dos años, desde la primera vez que hablamos sentí que te conocía de toda la vida. Me permitiste conocer partes tuyas del pasado, cada piedrita que te llevó a lograr todo lo que hoy tenés. Estoy muy orgullosa del hombre en el que te convertiste, y también del hombre que fuiste, de todo lo que afrontaste solo y superaste sin ayuda de nadie, de tu resiliencia y tu gran voluntad.<br><br>
        Aunque muchas veces me dijiste que fue gracias a mí que encontraste tu camino, siempre te voy a repetir que todas las cosas buenas que te rodean estaban destinadas a ser, porque vos solito pudiste afrontarlas. Nacimos solos y solos nos vamos, pero qué regalo es encontrarse en el medio, porque no hay una sola parte tuya que no admire: admiro tu fuerza de voluntad, admiro tu inteligencia, admiro tu corazón, admiro a las mujeres que te hicieron ser quien sos hoy, admiro tu sabiduría.<br><br>
        Y aunque no lo demuestre (básicamente porque todo el tiempo me aconsejás como si ya supieras todo y me da alta bronca), sos mi mayor ejemplo a seguir. No lo digo por ser tu novia, sino porque como persona sos una muestra de que ninguna angustia es eterna y que siempre viene algo mejor (yo, jejeje).<br><br>
        Sos un gran compañero, y deseo de todo corazón ser siempre la persona que elijas para acompañarte, para que este largo camino de la vida sea un poquito más ameno estando juntos.<br><br>
        Gracias por haber nacido y por hacerme la mujer más afortunada. Gracias por siempre cuidarme, por haber tomado lo mejor de tu crianza y transformar lo peor en lo que no quisiste ser. Gracias por compartir un año más este día conmigo y por todo el amor que me demostrás y generás, por cuidar mi corazón y mejorar cada día como hombre para mí.<br><br>
        Te deseo eterna felicidad, y quiero que sepas que esto es solo un tramo muy chiquito de todo lo que se viene por delante. Todo lo que deseás, tiempo al tiempo, se va a ir cumpliendo, como ya se fueron cumpliendo tantos de tus objetivos. Tenés una fuerza mental muy por encima de la media, y ese aspecto, además de tantos otros, te hace un ser único.<br><br>
        Te amo. Y para mí siempre vas a ser mi superhéroe.<br><br>
        Que cumplas muchos años más y que no vuelvas a la nicotina (ni este año ni el próximo), porque no me gusta el olor adentro del depto... ¡y también porque estoy embarazada! (ahre que no).<br><br>
        Quiero pasar tantos cumpleaños con vos como me sea posible, para que cuando cumplas 70 pueda decirle a la enfermera que no te haga mucho caso, que simplemente tenés el temperamento un poco jodido. También quiero formar tantos recuerdos como se pueda con el hombre que más feliz me hace, reírnos hasta cuando seamos viejitos, y decirle a todo el mundo con orgullo que el dueño de mis sonrisas fuiste, sos y serás vos.<br><br>
        Feliz cumpleaños ❤️<br><br>
      </div>

      <div class="firma-final">
        La mujer más hermosa y más importante de tu vida (yo) ❤️
      </div>

      <div class="separador"></div>

      <div class="boton-sorpresa">
        <a href="https://lizzyocm.github.io/felizcumple-globos/" target="_blank">Tengo algo más para vos 🎈</a>
      </div>
    </div>
  `;
});
