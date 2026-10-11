/**
 * TORE GROUP — LEGAL & CONSULTING
 * Interactive Frontend Controller (Vanilla ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. DATA DICTIONARIES ---
  const PRACTICES_DATA = {
    '01': {
      index: '01',
      title: 'Судебные споры и арбитраж',
      scope: 'Представительство интересов казахстанских и зарубежных компаний в Специализированных межрайонных экономических судах (СМЭС), апелляционных коллегиях, Верховном Суде РК, а также в Международном арбитраже МФЦА (AIFC Court & IAC).',
      risks: 'Потеря контроля над стратегическими активами, необоснованное наложение арестов на счета, срыв контрактных сроков из-за обеспечительных мер.',
      solutions: [
        'Претензионный аудит и предиктивный анализ судебной практики до подачи иска',
        'Комплексное взыскание задолженностей и защита от субсидиарной ответственности',
        'Срочные обеспечительные меры и снятие неправомерных арестов судебных исполнителей',
        'Принудительное исполнение решений иностранных арбитражей на территории РК'
      ]
    },
    '02': {
      index: '02',
      title: 'Корпоративное право и M&A',
      scope: 'Юридическое структурирование сделок купли-продажи бизнеса, слияний, поглощений и инвестиционных раундов в юрисдикциях РК и права МФЦА (на базе общего права Англии и Уэльса).',
      risks: 'Невыявленные обязательства компании-таргета (hidden liabilities), размытие долей миноритариев, корпоративный тупик (deadlock) среди акционеров.',
      solutions: [
        'Полномасштабный юридический Due Diligence активов и структуры владения',
        'Разработка акционерных соглашений (SHA), опционных программ (ESOP) и уставов',
        'Получение согласий антимонопольного органа (АЗРК) на экономическую концентрацию',
        'Реорганизация и структурирование холдинговых структур'
      ]
    },
    '03': {
      index: '03',
      title: 'Договорная работа и ВЭД',
      scope: 'Разработка многоуровневых контрактных матриц для международной торговли, дистрибуции, строительных проектов по проформам FIDIC и лицензионных сделок.',
      risks: 'Валютные штрафы, невозможность исполнения обязательств в условиях санкционного давления, односторонний отказ контрагента без возмещения убытков.',
      solutions: [
        'Адаптация международных контрактов к императивным нормам ГК РК и валютного контроля',
        'Включение защитных арбитражных оговорок и эскроу-механизмов расчетов',
        'Юридический аудит строительных подрядов (EPC / FIDIC) и гарантийных обязательств',
        'Сопровождение валютных операций и урегулирование таможенных претензий'
      ]
    },
    '04': {
      index: '04',
      title: 'Сопровождение бизнеса и комплаенс',
      scope: 'Абонентская юридическая поддержка операционной деятельности производственных, логистических и IT-компаний в Казахстане на правах внешнего генерального советника (General Counsel).',
      risks: 'Доначисление налогов по итогам камерального контроля, блокировка участия в тендерах Самрук-Қазына и Реестре недобросовестных поставщиков.',
      solutions: [
        'Ежедневное правовое сопровождение сделок, кадровых и регуляторных вопросов',
        'Аудит налоговых рисков и досудебное обжалование уведомлений ДГД',
        'Защита интересов поставщика в процедурах государственных закупок и квазигоссектора',
        'Разработка антикоррупционных и санкционных комплаенс-регламентов'
      ]
    },
    '05': {
      index: '05',
      title: 'Уголовно-правовая защита (White-Collar Crime)',
      scope: 'Адвокатская защита первых лиц, бенефициаров и топ-менеджмента по экономическим, налоговым и должностным преступлениям на всех стадиях уголовного процесса.',
      risks: 'Внезапные обыски, выемки документации, необоснованное ограничение свободы и парализация операционной работы предприятий.',
      solutions: [
        'Круглосуточный экстренный выезд адвоката при следственных действиях и задержаниях',
        'Формирование доказательственной базы невиновности и независимые экономические экспертизы',
        'Обжалование незаконных действий следователей и прокуроров в порядке ст. 106 УПК РК',
        'Превентивный аудит бизнес-процессов на предмет рисков уголовного преследования'
      ]
    },
    '06': {
      index: '06',
      title: 'Частным клиентам и Family Office',
      scope: 'Управление правовыми аспектами крупных частных состояний, наследственное планирование в нескольких юрисдикциях, защита личных и семейных активов.',
      risks: 'Неконтролируемый раздел активов при наследовании, претензии кредиторов на личное имущество, раскрытие бенефициарного владения.',
      solutions: [
        'Создание наследственных трастов, фондов и структурирование завещаний',
        'Брачные договоры и соглашения о разделе имущества с трансграничными активами',
        'Защита неприкосновенности частной жизни, репутации и персональных данных',
        'Сопровождение приобретения элитной недвижимости и зарубежных активов'
      ]
    }
  };

  const TEAM_ROSTER = [
    {
      name: 'Алихан Сарсенов',
      role: 'УПРАВЛЯЮЩИЙ ПАРТНЕР',
      experience: 'Стаж 18 лет',
      focus: 'Корпоративные споры, международный арбитраж, защита инвестиций. Член Палаты юридических консультантов РК.'
    },
    {
      name: 'Динара Кусаинова',
      role: 'ПАРТНЕР • РУКОВОДИТЕЛЬ ПРАКТИКИ',
      experience: 'Стаж 14 лет',
      focus: 'Сделки M&A, инвестиционное право, сопровождение проектов в Международном финансовом центре «Астана» (МФЦА).'
    },
    {
      name: 'Ерлан Бахытов',
      role: 'СТАРШИЙ АДВОКАТ',
      experience: 'Стаж 21 год',
      focus: 'Защита бизнеса по уголовным и экономическим делам, должностные преступления. Член Коллегии адвокатов г. Астана.'
    },
    {
      name: 'Тимур Жумагулов',
      role: 'ВЕДУЩИЙ ЮРИСТ',
      experience: 'Стаж 10 лет',
      focus: 'Налоговые споры, контрактное право, сопровождение внешнеэкономической деятельности и валютного контроля.'
    },
    {
      name: 'Асель Маратова',
      role: 'СОВЕТНИК',
      experience: 'Стаж 12 лет',
      focus: 'Антимонопольный комплаенс, защита участников при проверках АЗРК, государственные закупки и споры с монополиями.'
    },
    {
      name: 'Руслан Нурланов',
      role: 'СТАРШИЙ ЮРИСТ',
      experience: 'Стаж 9 лет',
      focus: 'Банкротство и реструктуризация задолженностей, защита руководителей от субсидиарной ответственности.'
    },
    {
      name: 'Дамир Кенжебаев',
      role: 'АДВОКАТ ПО АРБИТРАЖУ',
      experience: 'Стаж 11 лет',
      focus: 'Международный коммерческий арбитраж (AIFC, VIAC, ICC), исполнение иностранных арбитражных решений.'
    },
    {
      name: 'Мадина Оспанова',
      role: 'ЮРИСТ ПРАКТИКИ IP & TECH',
      experience: 'Стаж 7 лет',
      focus: 'Интеллектуальная собственность, сопровождение IT-бизнеса в Astana Hub, трудовой комплаенс.'
    }
  ];

  // --- 2. SCROLL REVEAL OBSERVER ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // --- 3. SCROLL-TRIGGERED HEADER NAVIGATION ---
  const header = document.getElementById('header');
  function handleHeaderScroll() {
    if (!header) return;
    // Header is visible on load; gains subtle frosted background when scrolled
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --- 4. ASTANA LIVE TIME TICKER ---
  const liveTimeText = document.getElementById('liveTimeText');
  function updateAstanaTime() {
    if (!liveTimeText) return;
    try {
      const now = new Date();
      // Format time in Asia/Almaty (Astana UTC+5)
      const options = {
        timeZone: 'Asia/Almaty',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      liveTimeText.textContent = new Intl.DateTimeFormat('ru-RU', options).format(now);
    } catch {
      // Fallback
      const d = new Date();
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      const astanaDate = new Date(utc + (3600000 * 5));
      const hours = String(astanaDate.getHours()).padStart(2, '0');
      const minutes = String(astanaDate.getMinutes()).padStart(2, '0');
      const seconds = String(astanaDate.getSeconds()).padStart(2, '0');
      liveTimeText.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
  updateAstanaTime();
  setInterval(updateAstanaTime, 1000);

  // --- 5. TOAST NOTIFICATION UTILITY ---
  const toastContainer = document.getElementById('toastContainer');
  function showToast(title, message, duration = 4500) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <div class="toast-icon" aria-hidden="true">✦</div>
      <div class="toast-content">
        <span class="toast-title">${title}</span>
        <span class="toast-text">${message}</span>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('is-visible');
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      }, { once: true });
    }, duration);
  }

  // --- 6. MODALS MANAGEMENT ---
  const consultationModal = document.getElementById('consultationModal');
  const practiceDetailsModal = document.getElementById('practiceDetailsModal');
  const teamRosterModal = document.getElementById('teamRosterModal');
  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.getElementById('menuToggle');
  const closeMenuBtn = document.getElementById('closeMenuBtn');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const focusable = modal.querySelector('button, input, textarea, select, [tabindex="0"]');
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    // Only restore body overflow if no other modal is open
    const anyModalActive = document.querySelector('.modal-backdrop.is-active, .mobile-drawer.is-active');
    if (!anyModalActive) {
      document.body.style.overflow = '';
    }
  }

  // Global close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.is-active');
      if (activeModal) closeModal(activeModal);

      if (mobileNav && mobileNav.classList.contains('is-active')) {
        closeMobileMenu();
      }
    }
  });

  // Close modals on clicking backdrop or close buttons
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.js-close-modal')) {
        closeModal(modal);
      }
    });
  });

  // Mobile Menu Handlers
  function openMobileMenu() {
    mobileNav.classList.add('is-active');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('is-active');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Consultation Trigger Buttons
  document.querySelectorAll('.js-open-consultation').forEach(btn => {
    btn.addEventListener('click', () => {
      if (mobileNav && mobileNav.classList.contains('is-active')) {
        closeMobileMenu();
      }
      openModal(consultationModal);
    });
  });

  // Manifesto Modal (triggers consultation prefilled or info toast)
  document.querySelectorAll('.js-open-manifesto-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(consultationModal);
    });
  });

  // Practice Filter Buttons (Design Library Pattern)
  const practiceFilterBtns = document.querySelectorAll('.practice-filter-btn');
  const allPracticeCards = document.querySelectorAll('.practice-card');

  practiceFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      practiceFilterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filterCategory = btn.getAttribute('data-filter');

      allPracticeCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.classList.remove('is-filtered-out');
        } else {
          card.classList.add('is-filtered-out');
        }
      });
    });
  });

  // Practice Card Click Handler
  const practiceCards = document.querySelectorAll('.practice-card');
  const practiceModalIndex = document.getElementById('practiceModalIndex');
  const practiceModalTitle = document.getElementById('practiceModalTitle');
  const practiceModalBody = document.getElementById('practiceModalBody');

  practiceCards.forEach(card => {
    const handlePracticeClick = () => {
      const pId = card.getAttribute('data-practice');
      const data = PRACTICES_DATA[pId];
      if (!data) return;

      practiceModalIndex.textContent = data.index;
      practiceModalTitle.textContent = data.title;

      let solutionsHtml = data.solutions.map(sol => `<li>${sol}</li>`).join('');

      practiceModalBody.innerHTML = `
        <div>
          <h4>МАСШТАБ И ПРЕДМЕТ ПРАКТИКИ</h4>
          <p>${data.scope}</p>
        </div>
        <div>
          <h4>КЛЮЧЕВЫЕ РИСКИ ДОВЕРИТЕЛЯ</h4>
          <p>${data.risks}</p>
        </div>
        <div>
          <h4>СТРАТЕГИЯ И ПРАВОВЫЕ РЕШЕНИЯ</h4>
          <ul>${solutionsHtml}</ul>
        </div>
      `;

      openModal(practiceDetailsModal);
    };

    card.addEventListener('click', handlePracticeClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handlePracticeClick();
      }
    });
  });

  // From Practice Modal to Consultation
  const practiceToConsultationBtn = document.querySelector('.js-practice-to-consultation');
  if (practiceToConsultationBtn) {
    practiceToConsultationBtn.addEventListener('click', () => {
      const currentTitle = practiceModalTitle.textContent;
      closeModal(practiceDetailsModal);
      
      const selectElem = document.getElementById('modalPracticeSelect');
      if (selectElem) {
        for (let i = 0; i < selectElem.options.length; i++) {
          if (selectElem.options[i].text.includes(currentTitle) || currentTitle.includes(selectElem.options[i].value)) {
            selectElem.selectedIndex = i;
            break;
          }
        }
      }
      openModal(consultationModal);
    });
  }

  // Footer practice links
  document.querySelectorAll('.js-footer-practice').forEach(link => {
    link.addEventListener('click', (e) => {
      const pId = link.getAttribute('data-practice');
      const card = document.querySelector(`.practice-card[data-practice="${pId}"]`);
      if (card) {
        e.preventDefault();
        card.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => card.focus(), 600);
      }
    });
  });

  // Team Roster Modal (All 8 Specialists)
  const teamRosterGrid = document.getElementById('teamRosterGrid');
  if (teamRosterGrid) {
    teamRosterGrid.innerHTML = TEAM_ROSTER.map(member => `
      <div class="roster-card">
        <span class="roster-role">${member.role} • ${member.experience}</span>
        <h4 class="roster-name">${member.name}</h4>
        <p class="roster-spec">${member.focus}</p>
      </div>
    `).join('');
  }

  document.querySelectorAll('.js-open-team-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(teamRosterModal);
    });
  });

  // --- 7. PHONE INPUT MASKING & VALIDATION ---
  function applyPhoneMask(input) {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.startsWith('8')) value = '7' + value.slice(1);
      if (!value.startsWith('7')) value = '7' + value;

      let formatted = '+7';
      if (value.length > 1) {
        formatted += ' (' + value.substring(1, 4);
      }
      if (value.length >= 5) {
        formatted += ') ' + value.substring(4, 7);
      }
      if (value.length >= 8) {
        formatted += '-' + value.substring(7, 9);
      }
      if (value.length >= 10) {
        formatted += '-' + value.substring(9, 11);
      }
      e.target.value = formatted;
    });

    input.addEventListener('focus', (e) => {
      if (!e.target.value) {
        e.target.value = '+7 (';
      }
    });

    input.addEventListener('blur', (e) => {
      if (e.target.value === '+7 (' || e.target.value === '+7') {
        e.target.value = '';
      }
    });
  }

  const clientPhoneInput = document.getElementById('clientPhone');
  if (clientPhoneInput) applyPhoneMask(clientPhoneInput);

  const modalClientPhoneInput = document.getElementById('modalClientPhone');
  if (modalClientPhoneInput) applyPhoneMask(modalClientPhoneInput);

  // --- 8. FORM SUBMISSIONS WITH VALIDATION & TOAST ---
  // Main Consultation Form (Section 5)
  const leadForm = document.getElementById('leadConsultationForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('clientName');
      const phoneInput = document.getElementById('clientPhone');
      const messageInput = document.getElementById('clientMessage');
      const nameError = document.getElementById('nameError');
      const phoneError = document.getElementById('phoneError');
      const messageError = document.getElementById('messageError');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Пожалуйста, укажите имя или название организации';
        nameInput.focus();
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Validate Phone
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (digitsOnly.length < 11) {
        phoneError.textContent = 'Укажите корректный номер телефона для связи';
        if (isValid) phoneInput.focus();
        isValid = false;
      } else {
        phoneError.textContent = '';
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageError.textContent = 'Кратко укажите суть ситуации для назначения специалиста';
        if (isValid) messageInput.focus();
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('submitInquiryBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Отправка данных...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Отправить конфиденциальный запрос</span><span class="arrow-glyph" aria-hidden="true">→</span>';
        leadForm.reset();

        showToast(
          'Запрос зарегистрирован',
          'Партнер практики свяжется с вами в течение 2 рабочих часов. Конфиденциальность гарантирована.'
        );
      }, 700);
    });
  }

  // Modal Assessment Form
  const modalForm = document.getElementById('modalAssessmentForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('modalClientName');
      const phoneInput = document.getElementById('modalClientPhone');

      if (!nameInput.value.trim()) {
        nameInput.focus();
        return;
      }

      const digits = phoneInput.value.replace(/\D/g, '');
      if (digits.length < 11) {
        phoneInput.focus();
        return;
      }

      const submitBtn = modalForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Регистрация...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Запросить оценку специалиста</span><span class="arrow-glyph" aria-hidden="true">→</span>';
        closeModal(consultationModal);
        modalForm.reset();

        showToast(
          'Заявка принята в работу',
          'С вами свяжется управляющий партнер Tore Group.'
        );
      }, 600);
    });
  }
});
