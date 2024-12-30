const jobs = [
  {
    name: 'Clipp Movilidad',
    period: 'Septiembre 2022 - Presente',
    role: 'Desarrollador Full Stack',
    description: `
    Dentro de la empresa he trabajado en múltiples proyectos usando diferentes tecnologías. 
    En el frontend, he desarrollado aplicaciones con Vue 3, TypeScript y Quasar, creando
    interfaces de usuario intuitivas y eficientes, destacando funcionalidades como <b>manejo de mapas,
    elaboración de gráficas estadísticas,uso de mapas de calor, etc.</b>
    <br/>
    Por otra parte, en el área del backend, he trabajado con Nest JS usando ORMs como TypeORM y Mongoose, 
    implementando soluciones robustas y escalables. He esta área he usado destaco <b> el uso de arquitectura limpia 
    (clean architecture), aplicación de microservicios y su comunicación a través de RabbitMQ. Adicionalmente
    en los proyectos he creado servidores para comunicación con MQTT</b>. 
    <br/>
    Finalmente, he gestionado bases de datos MySQL y MongoDB, asegurando la integridad y disponibilidad de los datos.`
  },
  {
    name: 'Cafrilosa',
    period: 'Septiembre 2023 - Enero 2024',
    role: 'Profesional Autónomo',
    description: `Como profesional autónomo, trabajé en la automatización de un proceso interno de la
    empresa, aprovechando tecnologías avanzadas para ofrecer soluciones eficientes y
    escalables. En el frontend, utilicé Vue 3, TypeScript y Quasar para desarrollar
    interfaces intuitivas y fáciles de usar, destacando la elaboración de gráficas estadísticas. <br/>
    En el backend, implementé soluciones robustas con Nest JS y TypeORM, asegurando el
    rendimiento y la fiabilidad del sistema. Además, gestioné la base de datos MySQL,
    garantizando la integridad y disponibilidad de los datos.`
  },
]

const skills = [
  {
    name: 'HTML & CSS',
    level: 100
  },
  {
    name: 'Javascript',
    level: 95
  },
  {
    name: 'Vue JS',
    level: 80
  },
  {
    name: 'Node JS',
    level: 90
  },
  {
    name: 'Nest JS',
    level: 90
  },
  {
    name: 'MySQL',
    level: 90
  },
  {
    name: 'MongoDB',
    level: 90
  },
]


const studies = [
  {
    school: 'Universidad Nacional de Loja',
    career: 'Ingeniería en Sistemas',
    period: '2017-2022',
    certificate_path: './assets/files/Certificado_titulo.pdf',
    certificate_name: 'Certificado_titulo.pdf',
    description: `
      Durante mi formación en la Universidad Nacional de Loja adquirí conocimientos útiles para el campo laboral 
      entre los que destaco <b>el estudio de cada una de las etapas del proceso de construcción de un software desde la 
      adquisición de los requerimientos hasta la entrega y mantenimiento del producto. Además del uso de metodologías 
      ágiles y tradicionales</b> así como otras aptitudes en áreas como redes y mantenimiento de hardware.
    `
  }
]

const courses = [
  {
    title: 'Principios SOLID y Clean Code',
    school: 'DevTalles',
    date: '2024-05-08',
    certificate_path: './assets/files/Franz-Flores-SOLID.pdf',
    certificate_name: 'Franz-Flores-SOLID.pdf',
  },
  {
    title: 'Nest: Desarrollo backend escalable con Node',
    school: 'DevTalles',
    date: '2024-08-27',
    certificate_path: './assets/files/Franz-Flores-Nest.pdf',
    certificate_name: 'Franz-Flores-Nest.pdf',
  },
  {
    title: 'NestJS + Microservicios: Aplicaciones escalables y modulares',
    school: 'DevTalles',
    date: '2024-10-07',
    certificate_path: './assets/files/Franz-Flores-Microservices.pdf',
    certificate_name: 'Franz-Flores-Microservices.pdf',
  },
  {
    title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
    school: 'DevTalles',
    date: '2023-06-06',
    certificate_path: './assets/files/Franz-Flores-Git.pdf',
    certificate_name: 'Franz-Flores-Git.pdf',
  },
]

const loadJobs = () => {
  let result = '';
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    result += `
      <h6 class="title text-danger">${job.name}</h6>
      <p>${job.role} (${job.period})</p>
      <p class="subtitle">${job.description}</p>
    `;

    result += i == (jobs.length - 1) ? '' : '<hr/>'
  }

  return result;
}

const loadSkills = () => {
  let result = '';
  for (const skill of skills) {
    result += `
      <h6>${skill.name}</h6>
      <div class="progress mb-3">
          <div class="progress-bar bg-danger" role="progressbar" style="width: ${skill.level}%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    `;
  }

  return result;
}

const loadStudies = () => {
  let result = '';
  for (let i = 0; i < studies.length; i++) {
    const study = studies[i];
    result += `
      <h6 class="title text-danger">${study.school}</h6>
      <p>${study.career} (${study.period})</p>
      <p class="subtitle">${study.description}</p>
      <div>
        <a href="${study.certificate_path}" download="${study.certificate_name}"
          class="btn btn-outline-danger" target="_blank">
          <i class="ti-medall"></i> Ver Certificado 
        </a>
      </div>
    `;

    result += i == (studies.length - 1) ? '' : '<hr/>'
  }

  return result;
}

const loadCourses = () => {
  let result = '';
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    result += `
      <h6 class="title text-danger">${course.title}</h6>
      <p><span class="label-education">Instituto:</span> ${course.school}</p>
      <p><span class="label-education">Fecha:</span> ${course.date}</p>
      <div>
        <a href="${course.certificate_path}" download="${course.certificate_name}"
          class="btn btn-outline-danger" target="_blank">
          <i class="ti-medall"></i> Ver Certificado 
        </a>
      </div>
    `;

    result += i == (courses.length - 1) ? '' : '<hr/>'
  }

  return result;
}

$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });

  const contentJobs = loadJobs();
  $('#experience-container').html(contentJobs);

  const contentSkills = loadSkills();
  $('#skill-container').html(contentSkills);

  const contentStudies = loadStudies();
  $('#education-container').html(contentStudies);

  const contentCourses = loadCourses();
  $('#courses-container').html(contentCourses);

  (function () {
    emailjs.init({
      publicKey: "OZuVTphfRhZJ-fLIE",
    });
  })();

  $('#contact-form').on('submit', function (event) {
    event.preventDefault();


    clearForm();
    const templateParams = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val(),
    };

    emailjs
      .send('service_p239egl', 'template_k0fihfe', templateParams)
      .then(
        function (response) {
          clearForm();
          const toast = new bootstrap.Toast(document.getElementById('toast-message'));
          $('#toast-message .toast-body').text('Mensaje enviado correctamente');
          toast.show();

        },
        function (error) {
          clearForm();
          const toast = new bootstrap.Toast(document.getElementById('toast-message'));
          $('#toast-message .toast-body').text('No se pudo enviar el mensaje. Intente nuevamente');
          toast.show();
          console.error('EmailJS error:', error);
        }
      );
  });



});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1
    }
  }), $(".filters a").click(function () {
    $(".filters .active").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-filter");
    return t.isotope({
      filter: i,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
      }
    }), !1
  });
});



const clearForm = () => {
  $('#name').val('');
  $('#email').val('');
  $('#message').val('')
}