window.QUIZ_DATA = {
  "01": {
    "title": "Kubernetes: архитектура и модель управления",
    "questions": [
      {
        "question": "Какую задачу решает kube-apiserver?",
        "options": [
          "Принимает и проверяет API-запросы, предоставляя единую точку управления состоянием кластера.",
          "Запускает контейнеры на каждой node.",
          "Хранит данные PVC на локальном диске.",
          "Выбирает Pod IP через CNI.",
          "Балансирует HTTP-трафик между Service."
        ],
        "answer": 0
      },
      {
        "question": "Какую информацию хранит etcd?",
        "options": [
          "Согласованное состояние объектов Kubernetes, необходимое control plane.",
          "Логи stdout всех контейнеров.",
          "Образы контейнеров.",
          "Только правила NetworkPolicy.",
          "Файлы PersistentVolume."
        ],
        "answer": 0
      },
      {
        "question": "За что отвечает kube-scheduler?",
        "options": [
          "Выбирает подходящую node для Pod без назначенной node.",
          "Проверяет HTTP readiness приложения.",
          "Создаёт сетевой namespace Pod.",
          "Сохраняет объект Deployment в etcd.",
          "Проксирует запрос Grafana."
        ],
        "answer": 0
      },
      {
        "question": "Что делает kubelet?",
        "options": [
          "Наблюдает назначенные Pod и через runtime приводит локальное состояние node к PodSpec.",
          "Управляет репликами Deployment во всём кластере.",
          "Выдаёт пользователям RBAC-права.",
          "Хранит историю GitOps-изменений.",
          "Создаёт Gateway listener."
        ],
        "answer": 0
      },
      {
        "question": "Почему успешный kubectl apply не означает готовое приложение?",
        "options": [
          "После записи объекта контроллеры, scheduler и kubelet выполняют согласование асинхронно.",
          "apply не проверяет YAML-синтаксис.",
          "kubectl не использует API server.",
          "Pod всегда запускается только вручную.",
          "etcd не хранит Deployment."
        ],
        "answer": 0
      },
      {
        "question": "Чем generation отличается от observedGeneration?",
        "options": [
          "generation отражает изменение spec, observedGeneration показывает обработанную контроллером версию.",
          "generation является UID Pod, observedGeneration — IP.",
          "это два названия одного поля.",
          "generation создаёт kubelet, observedGeneration — CNI.",
          "оба поля хранят только логи."
        ],
        "answer": 0
      },
      {
        "question": "Какую роль выполняет namespace?",
        "options": [
          "Ограничивает область имён namespaced-объектов, но сам по себе не даёт сетевую изоляцию.",
          "Автоматически запрещает трафик между командами.",
          "Заменяет ClusterRoleBinding.",
          "Назначает Pod на node.",
          "Шифрует Secret."
        ],
        "answer": 0
      },
      {
        "question": "Зачем нужны conditions в status?",
        "options": [
          "Они сообщают этап и причину наблюдаемого состояния контроллера.",
          "Они выбирают Service backend.",
          "Они заменяют labels Pod.",
          "Они содержат пароль пользователя.",
          "Они задают CPU limit."
        ],
        "answer": 0
      },
      {
        "question": "Что означает отказ API при 403 Forbidden?",
        "options": [
          "Клиент аутентифицирован, но не имеет права на запрошенное действие.",
          "Клиент не передал credential.",
          "YAML не прошёл схему.",
          "CNI не создал интерфейс.",
          "PVC не привязан."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя лечить API-инцидент удалением данных etcd?",
        "options": [
          "Это может превратить частичную недоступность control plane в необратимую потерю состояния.",
          "etcd не участвует в Kubernetes.",
          "это автоматически перезапускает все Pod.",
          "это только очищает events.",
          "это увеличивает число реплик."
        ],
        "answer": 0
      }
    ]
  },
  "02": {
    "title": "Kubernetes: подробный учебный материал — API-объекты, YAML и kubectl: как декларация меняет кластер",
    "questions": [
      {
        "question": "Что такое kubectl?",
        "options": [
          "Клиент командной строки, который обращается к Kubernetes API.",
          "Контейнерный runtime, запускающий процессы на node.",
          "Хранилище состояния control plane.",
          "Сетевой плагин для назначения Pod IP.",
          "Контроллер, который создаёт ReplicaSet."
        ],
        "answer": 0
      },
      {
        "question": "Какую функцию выполняет kube-apiserver при применении манифеста?",
        "options": [
          "Принимает запрос, проверяет доступ и сохраняет допустимый объект в API-хранилище.",
          "Непосредственно запускает контейнер на выбранной node.",
          "Выдаёт Pod IP и настраивает маршруты.",
          "Создаёт PVC на стороне storage backend без контроллера.",
          "Проксирует HTTP-трафик пользователя к Service."
        ],
        "answer": 0
      },
      {
        "question": "Чем spec отличается от status в объекте Kubernetes?",
        "options": [
          "spec описывает желаемое состояние, status — наблюдаемое состояние от контроллеров.",
          "spec содержит только labels, status — только annotations.",
          "spec заполняет scheduler, status — пользователь через kubectl apply.",
          "spec существует лишь у Pod, status — лишь у Deployment.",
          "между spec и status нет семантической разницы."
        ],
        "answer": 0
      },
      {
        "question": "Для чего предназначены labels?",
        "options": [
          "Для отбора и группировки объектов селекторами Service и контроллеров.",
          "Для хранения секретов приложения в base64.",
          "Для неизменяемой идентификации конкретного экземпляра вместо UID.",
          "Для передачи больших многострочных конфигураций контейнеру.",
          "Для хранения журнала событий Kubernetes."
        ],
        "answer": 0
      },
      {
        "question": "Когда следует использовать annotations вместо labels?",
        "options": [
          "Когда метаданные не нужны для селекции объектов, например конфигурация контроллера или ссылка на документацию.",
          "Когда Service должен выбрать Pod по этому значению.",
          "Когда значение участвует в NetworkPolicy podSelector.",
          "Когда нужно ограничить число реплик Deployment.",
          "Когда требуется назначить node для Pod."
        ],
        "answer": 0
      },
      {
        "question": "В чём практическое различие между kubectl create и kubectl apply?",
        "options": [
          "create создаёт новый объект и конфликтует при существующем имени; apply согласует декларативную конфигурацию.",
          "create работает только с Pod, а apply — только с Service.",
          "apply немедленно запускает контейнер, а create только валидирует YAML.",
          "create изменяет status, а apply — spec.",
          "между create и apply нет различия."
        ],
        "answer": 0
      },
      {
        "question": "Что защищает server-side apply?",
        "options": [
          "Конфликт владения полем, когда разные менеджеры пытаются изменить один путь объекта.",
          "Передачу трафика между Pods разных namespace.",
          "Шифрование значений Secret в etcd.",
          "Отказ node при обновлении Deployment.",
          "Переполнение очереди remote write."
        ],
        "answer": 0
      },
      {
        "question": "Зачем объекту нужен finalizer?",
        "options": [
          "Чтобы контроллер завершил внешнюю очистку до окончательного удаления объекта из API.",
          "Чтобы Pod нельзя было перезапустить kubelet.",
          "Чтобы Service получил постоянный ClusterIP.",
          "Чтобы запретить чтение объекта всем пользователям.",
          "Чтобы scheduler выбрал node с большим количеством CPU."
        ],
        "answer": 0
      },
      {
        "question": "Какую роль выполняют ownerReferences?",
        "options": [
          "Описывают отношение владельца и зависимого объекта для контроллеров и garbage collector.",
          "Определяют внешний URL Ingress.",
          "Настраивают TLS для API server.",
          "Задают лимит памяти контейнера.",
          "Превращают ConfigMap в Secret."
        ],
        "answer": 0
      },
      {
        "question": "Как безопасно оценить изменение манифеста до production apply?",
        "options": [
          "Проверить его server-side dry-run и diff, затем применить контролируемой identity и ждать conditions.",
          "Удалить все связанные Pods и посмотреть, создадутся ли новые.",
          "Выдать CI cluster-admin и применить replace.",
          "Вручную удалить managedFields из работающего объекта.",
          "Изменить finalizer на пустой список."
        ],
        "answer": 0
      }
    ]
  },
  "03": {
    "title": "Kubernetes: подробный учебный материал — Pod и жизненный цикл контейнеров: минимальная единица размещения",
    "questions": [
      {
        "question": "Что такое Pod в Kubernetes?",
        "options": [
          "Минимальная единица размещения: один или несколько контейнеров с общей сетью на одной node.",
          "Один контейнерный образ в registry.",
          "Кластерный балансировщик L7.",
          "Правило RBAC.",
          "Диск PersistentVolume."
        ],
        "answer": 0
      },
      {
        "question": "Почему контейнеры одного Pod могут обращаться друг к другу через localhost?",
        "options": [
          "Они разделяют один network namespace и IP Pod.",
          "У каждого контейнера есть отдельный Service.",
          "kube-proxy перенаправляет localhost.",
          "они получают одинаковый UID.",
          "scheduler создаёт общий NodePort."
        ],
        "answer": 0
      },
      {
        "question": "Когда запускаются обычные контейнеры Pod?",
        "options": [
          "После успешного последовательного завершения всех init containers.",
          "До запуска CNI.",
          "До назначения Pod на node.",
          "Только после удаления readiness probe.",
          "После завершения Deployment."
        ],
        "answer": 0
      },
      {
        "question": "Что означает Pod phase Running?",
        "options": [
          "Хотя бы один контейнер запущен или запускается; это не гарантирует готовность принимать трафик.",
          "Все запросы приложения обязательно успешны.",
          "Pod уже включён во все Service endpoints.",
          "PVC точно смонтирован.",
          "liveness probe отключена."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужна readiness probe?",
        "options": [
          "Определяет, можно ли направлять на Pod обычный трафик через Service.",
          "Выбирает node для Pod.",
          "Шифрует соединение контейнера.",
          "Удаляет Pod после ошибки.",
          "Создаёт ReplicaSet."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужна liveness probe?",
        "options": [
          "Помогает kubelet решить, следует ли перезапустить нездоровый контейнер.",
          "Публикует DNS-запись Service.",
          "Сохраняет данные контейнера в PVC.",
          "Проверяет RBAC пользователя.",
          "Назначает внешний IP."
        ],
        "answer": 0
      },
      {
        "question": "Зачем нужна startup probe?",
        "options": [
          "Даёт медленно стартующему приложению время до начала обычных liveness/readiness проверок.",
          "Ускоряет pull образа.",
          "Создаёт init container.",
          "Заменяет все resource limits.",
          "Переносит Pod на другую node."
        ],
        "answer": 0
      },
      {
        "question": "Что исследовать при CrashLoopBackOff?",
        "options": [
          "Предыдущие логи, exit code, termination reason, command, config и probes.",
          "Только ClusterIP Service.",
          "Только UID namespace.",
          "Только число ReplicaSet.",
          "Только версию kubectl."
        ],
        "answer": 0
      },
      {
        "question": "Что происходит при штатном удалении Pod?",
        "options": [
          "Kubelet выполняет preStop, отправляет SIGTERM и ждёт terminationGracePeriodSeconds.",
          "Контейнер сразу получает SIGKILL без ожидания.",
          "Service удаляется навсегда.",
          "etcd очищается.",
          "CNI удаляет namespace до сигнала приложению."
        ],
        "answer": 0
      },
      {
        "question": "Для чего применяют ephemeral container?",
        "options": [
          "Для диагностики работающего Pod, когда обычный образ не содержит нужных инструментов.",
          "Для постоянного sidecar в Deployment.",
          "Для создания StorageClass.",
          "Для выдачи ClusterRole.",
          "Для замены image pull policy."
        ],
        "answer": 0
      }
    ]
  },
  "04": {
    "title": "Kubernetes: подробный учебный материал — Контроллеры рабочих нагрузок: Deployment, StatefulSet, DaemonSet и Job",
    "questions": [
      {
        "question": "Почему одиночный Pod обычно не подходит для приложения?",
        "options": [
          "После удаления или отказа node нет контроллера, который гарантированно восстановит такой Pod.",
          "Pod не может иметь IP.",
          "Pod нельзя читать через API.",
          "Pod не может монтировать PVC.",
          "Pod всегда работает только на control plane."
        ],
        "answer": 0
      },
      {
        "question": "Как связаны Deployment и ReplicaSet?",
        "options": [
          "Deployment управляет ReplicaSet, а ReplicaSet поддерживает нужное число Pod.",
          "ReplicaSet управляет Deployment.",
          "оба объекта создают StorageClass.",
          "Deployment является CNI-плагином.",
          "ReplicaSet заменяет Service."
        ],
        "answer": 0
      },
      {
        "question": "Что запускает новый ReplicaSet при обновлении Deployment?",
        "options": [
          "Изменение Pod template Deployment.",
          "Изменение ClusterIP Service.",
          "Изменение Event TTL.",
          "Перезапуск CoreDNS.",
          "Чтение логов Pod."
        ],
        "answer": 0
      },
      {
        "question": "Что регулируют maxSurge и maxUnavailable?",
        "options": [
          "Количество дополнительных и временно недоступных реплик во время RollingUpdate.",
          "Размер PVC.",
          "Число namespace.",
          "Порт Gateway listener.",
          "Время хранения events."
        ],
        "answer": 0
      },
      {
        "question": "Когда используют StatefulSet?",
        "options": [
          "Когда приложению нужны устойчивые имена реплик, порядок жизненного цикла и отдельные PVC.",
          "Когда нужен один Pod на каждой node.",
          "Когда задача должна завершиться один раз.",
          "Когда нужен только HTTP Service.",
          "Когда требуется открыть NodePort."
        ],
        "answer": 0
      },
      {
        "question": "Что обеспечивает headless Service для StatefulSet?",
        "options": [
          "DNS-записи отдельных endpoints вместо одного виртуального ClusterIP.",
          "Шифрование диска PVC.",
          "Создание RBAC-ролей.",
          "Удаление старых ReplicaSet.",
          "Сжатие логов."
        ],
        "answer": 0
      },
      {
        "question": "Для чего предназначен DaemonSet?",
        "options": [
          "Чтобы поддерживать Pod на каждой подходящей node, например агент CNI или логирования.",
          "Чтобы выполнить задачу по cron.",
          "Чтобы хранить данные базы.",
          "Чтобы создать один public Gateway.",
          "Чтобы выдавать Secret."
        ],
        "answer": 0
      },
      {
        "question": "Почему Job должна быть идемпотентной?",
        "options": [
          "Контроллер может повторить Pod после ошибки или неопределённости, и действие не должно выполниться опасно дважды.",
          "Job никогда не имеет retry.",
          "Job не использует контейнеры.",
          "Job всегда получает стабильный IP.",
          "Job заменяет Deployment."
        ],
        "answer": 0
      },
      {
        "question": "Что определяет CronJob concurrencyPolicy?",
        "options": [
          "Разрешено ли одновременно выполнять перекрывающиеся запуски Job.",
          "Тип CNI tunneling.",
          "Режим шифрования Secret.",
          "Порт Service.",
          "Размер resource quota."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно проверить перед rollback Deployment?",
        "options": [
          "Совместимость схемы данных, readiness, внешние зависимости и возможность отката миграций.",
          "Только имя нового Pod.",
          "Только UID Deployment.",
          "Только версию CoreDNS.",
          "Только NodePort."
        ],
        "answer": 0
      }
    ]
  },
  "05": {
    "title": "Kubernetes: подробный учебный материал — Конфигурация, задания и секреты: границы между кодом, данными и доступом",
    "questions": [
      {
        "question": "Чем Secret отличается от ConfigMap?",
        "options": [
          "Secret предназначен для чувствительных данных и требует более строгого контроля доступа.",
          "ConfigMap всегда шифруется в etcd.",
          "Secret нельзя монтировать в Pod.",
          "ConfigMap доступен только cluster-admin.",
          "между ними нет различий."
        ],
        "answer": 0
      },
      {
        "question": "Почему base64 не защищает Secret?",
        "options": [
          "Base64 является кодированием и легко обратимо без ключа шифрования.",
          "Base64 удаляет данные после чтения.",
          "Base64 запрещает доступ kubelet.",
          "Base64 автоматически создаёт TLS.",
          "Base64 заменяет RBAC."
        ],
        "answer": 0
      },
      {
        "question": "Когда обновится переменная окружения из ConfigMap в уже работающем контейнере?",
        "options": [
          "Она не обновится; для применения нужен новый контейнер или иной механизм reload.",
          "Сразу после kubectl apply.",
          "Только после restart CoreDNS.",
          "После изменения Service selector.",
          "При следующем DNS-запросе."
        ],
        "answer": 0
      },
      {
        "question": "Почему изменение ConfigMap может требовать rollout?",
        "options": [
          "Новые и старые Pod должны получить предсказуемую версию конфигурации.",
          "ConfigMap нельзя читать из Pod.",
          "rollout шифрует ConfigMap.",
          "rollout создаёт StorageClass.",
          "иначе API server удалит ConfigMap."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужен backoffLimit у Job?",
        "options": [
          "Ограничивает число неудачных повторов выполнения Job.",
          "Задаёт число Service endpoints.",
          "Ограничивает размер Secret.",
          "Выбирает CNI-режим.",
          "Настраивает TLS Gateway."
        ],
        "answer": 0
      },
      {
        "question": "Почему внешняя операция Job должна быть идемпотентной?",
        "options": [
          "Pod Job может быть повторён, и повтор не должен опасно выполнить действие второй раз.",
          "Job всегда создаёт один Pod.",
          "Job не имеет сети.",
          "Job не получает exit code.",
          "Job не использует API."
        ],
        "answer": 0
      },
      {
        "question": "Что определяет activeDeadlineSeconds?",
        "options": [
          "Максимальное время выполнения Job или Pod до принудительного завершения.",
          "TTL Secret.",
          "Число replicas Deployment.",
          "Время хранения PVC.",
          "Порт NodePort."
        ],
        "answer": 0
      },
      {
        "question": "Что задаёт CronJob startingDeadlineSeconds?",
        "options": [
          "Допустимое опоздание, после которого пропущенный запуск больше не выполняется.",
          "Время readiness probe.",
          "Размер очереди vmagent.",
          "Срок действия TLS-сертификата.",
          "Интервал CNI health check."
        ],
        "answer": 0
      },
      {
        "question": "Почему CronJob не гарантирует выполнение ровно один раз?",
        "options": [
          "Контроллер и задача могут повторить запуск или пропустить период при сбоях.",
          "CronJob не создаёт Job.",
          "CronJob работает только без сети.",
          "CronJob не поддерживает расписания.",
          "CronJob всегда создаёт StatefulSet."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно проверить при ротации секрета?",
        "options": [
          "Что потребители получили новое значение и старое безопасно отозвано.",
          "Только имя namespace.",
          "Только число Pod.",
          "Только ClusterIP Service.",
          "Только версию kubectl."
        ],
        "answer": 0
      }
    ]
  },
  "06": {
    "title": "Kubernetes: подробный учебный материал — Планирование и ресурсы: как Kubernetes выбирает node и защищает кластер",
    "questions": [
      {
        "question": "На что scheduler опирается при размещении Pod?",
        "options": [
          "На requests, allocatable node и ограничения размещения, а не на мгновенное потребление.",
          "На логи контейнера.",
          "На содержимое ConfigMap.",
          "На текущий DNS-ответ.",
          "На размер Docker image."
        ],
        "answer": 0
      },
      {
        "question": "Что означает CPU request?",
        "options": [
          "Ресурс, который участвует в scheduling и распределении CPU времени.",
          "Жёсткий лимит памяти.",
          "Количество Service endpoints.",
          "Срок жизни Pod.",
          "Размер PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что происходит при превышении memory limit?",
        "options": [
          "Процесс контейнера может быть завершён как OOMKilled.",
          "scheduler переносит Pod без рестарта.",
          "Service меняет ClusterIP.",
          "RBAC удаляет Secret.",
          "CNI отключает сеть всех Pod."
        ],
        "answer": 0
      },
      {
        "question": "Чем OOMKilled отличается от eviction?",
        "options": [
          "OOMKilled связан с лимитом/памятью контейнера, eviction — с pressure node и решением kubelet.",
          "Это одно и то же поле.",
          "Eviction происходит только в etcd.",
          "OOMKilled удаляет namespace.",
          "Eviction создаёт новую StorageClass."
        ],
        "answer": 0
      },
      {
        "question": "Что разрешает toleration?",
        "options": [
          "Позволяет Pod размещаться на node с соответствующим taint, но не требует этого.",
          "Гарантирует размещение на любой node.",
          "Создаёт taint на Pod.",
          "Открывает NodePort.",
          "Отключает quota."
        ],
        "answer": 0
      },
      {
        "question": "Какой effect taint может выселить уже работающий Pod?",
        "options": [
          "NoExecute.",
          "NoSchedule.",
          "PreferNoSchedule.",
          "ReadWriteOnce.",
          "ClusterIP."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужны topologySpreadConstraints?",
        "options": [
          "Для распределения подходящих реплик между доменами topology, например zones или nodes.",
          "Для шифрования PVC.",
          "Для выбора DNS-зоны.",
          "Для создания Secret.",
          "Для API-аутентификации."
        ],
        "answer": 0
      },
      {
        "question": "Что ограничивает ResourceQuota?",
        "options": [
          "Суммарные ресурсы или количество объектов в namespace.",
          "Только размер одного контейнера.",
          "Только число node кластера.",
          "Только число labels.",
          "Только TLS cipher."
        ],
        "answer": 0
      },
      {
        "question": "Что задаёт LimitRange?",
        "options": [
          "Default, minimum и maximum requests/limits для ресурсов namespace.",
          "Маршруты Pod CIDR.",
          "Список RBAC subject.",
          "Историю Deployment.",
          "Параметры etcd."
        ],
        "answer": 0
      },
      {
        "question": "Почему высокий PriorityClass не создаёт capacity?",
        "options": [
          "Scheduler может вытеснить менее приоритетный Pod, но не создаёт CPU, память или IP.",
          "PriorityClass удаляет лимиты.",
          "PriorityClass заменяет HPA.",
          "PriorityClass добавляет node.",
          "PriorityClass шифрует данные."
        ],
        "answer": 0
      }
    ]
  },
  "07": {
    "title": "Kubernetes: подробный учебный материал — Хранилище Kubernetes: PV, PVC, StorageClass, CSI и резервное копирование",
    "questions": [
      {
        "question": "Что описывает PersistentVolumeClaim?",
        "options": [
          "Запрос workload на persistent storage с нужными свойствами.",
          "Физический диск node.",
          "Сетевой маршрут Pod.",
          "Право RBAC.",
          "Образ контейнера."
        ],
        "answer": 0
      },
      {
        "question": "Какую роль выполняет StorageClass?",
        "options": [
          "Задаёт политику динамического выделения storage для PVC.",
          "Создаёт ReplicaSet.",
          "Маршрутизирует HTTP.",
          "Хранит Secret.",
          "Выбирает Service endpoint."
        ],
        "answer": 0
      },
      {
        "question": "Что означает access mode ReadWriteOnce?",
        "options": [
          "Том предназначен для записи с одной node в пределах возможностей конкретного storage driver.",
          "Только один процесс может читать файл.",
          "Том доступен всем namespace.",
          "Том нельзя монтировать.",
          "Том всегда ReadOnly."
        ],
        "answer": 0
      },
      {
        "question": "Зачем нужен WaitForFirstConsumer?",
        "options": [
          "Откладывает provisioning/binding до выбора node, чтобы соблюсти topology тома.",
          "Ускоряет удаление PVC.",
          "Отключает scheduler.",
          "Шифрует данные Secret.",
          "Создаёт DNS Service."
        ],
        "answer": 0
      },
      {
        "question": "Что означает reclaimPolicy Retain?",
        "options": [
          "После освобождения PV backend-данные сохраняются для ручной обработки.",
          "Backend удаляется немедленно.",
          "Pod не может монтировать PVC.",
          "PVC становится Secret.",
          "CNI удаляет IP."
        ],
        "answer": 0
      },
      {
        "question": "Чем отличается PVC Bound от успешного mount в Pod?",
        "options": [
          "Bound подтверждает binding, но mount зависит от CSI, node и backend.",
          "Это полностью одинаковые состояния.",
          "Mount выполняет Service.",
          "Bound означает готовность приложения.",
          "PVC Bound отменяет CNI."
        ],
        "answer": 0
      },
      {
        "question": "Какая роль у CSI controller?",
        "options": [
          "Выполняет control-plane операции storage, например provisioning или attach в зависимости от driver.",
          "Запускает контейнер приложения.",
          "Выбирает HTTP route.",
          "Выдаёт RBAC-token.",
          "Собирает логи Pod."
        ],
        "answer": 0
      },
      {
        "question": "Почему snapshot не всегда является backup базы?",
        "options": [
          "Снимок блоков может быть crash-consistent без согласованности транзакций приложения.",
          "Snapshot никогда не копирует данные.",
          "Backup не требует restore.",
          "CSI не работает с дисками.",
          "База не использует storage."
        ],
        "answer": 0
      },
      {
        "question": "Почему hostPath опасен для production-данных?",
        "options": [
          "Данные жёстко привязаны к конкретной node и плохо переживают её отказ.",
          "hostPath запрещён YAML-схемой.",
          "hostPath всегда шифруется.",
          "hostPath создаёт HA автоматически.",
          "hostPath заменяет PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что доказывает проверенный restore-test?",
        "options": [
          "Что резервная копия и процедура восстановления действительно дают пригодные данные.",
          "Только наличие snapshot.",
          "Только свободное место node.",
          "Только доступность API server.",
          "Только успешный kubectl apply."
        ],
        "answer": 0
      }
    ]
  },
  "08": {
    "title": "Kubernetes: подробный учебный материал — Сетевая модель Kubernetes: адресация, DNS и путь пакета",
    "questions": [
      {
        "question": "Какие адресные пространства обычно различают в Kubernetes?",
        "options": [
          "Сети node, Pod и Service с непересекающимися диапазонами.",
          "Только сеть Docker image.",
          "Только namespace network.",
          "Только DNS network.",
          "Только сеть etcd."
        ],
        "answer": 0
      },
      {
        "question": "Кто обычно назначает Pod адрес и маршруты?",
        "options": [
          "Выбранный CNI-плагин при подключении Pod к сети.",
          "Deployment controller.",
          "kubectl client.",
          "ServiceAccount.",
          "vmalert."
        ],
        "answer": 0
      },
      {
        "question": "Почему контейнеры одного Pod используют localhost?",
        "options": [
          "Они разделяют network namespace Pod.",
          "У них одинаковый image.",
          "Их выбирает один Service.",
          "Они всегда используют hostNetwork.",
          "Их запускает один Job."
        ],
        "answer": 0
      },
      {
        "question": "Что даёт Service?",
        "options": [
          "Стабильную точку доступа к набору подходящих Pod вместо прямого использования Pod IP.",
          "Постоянный IP отдельного Pod.",
          "Гарантию readiness приложения.",
          "Шифрование Secret.",
          "Выбор node scheduler."
        ],
        "answer": 0
      },
      {
        "question": "Что представляет EndpointSlice?",
        "options": [
          "Набор backend endpoints Service с их портами и состоянием готовности.",
          "Историю Git-коммитов.",
          "Список RBAC ролей.",
          "Файл конфигурации CoreDNS.",
          "Список PVC."
        ],
        "answer": 0
      },
      {
        "question": "Почему DNS-имя Service не доказывает доступность приложения?",
        "options": [
          "DNS может разрешиться при пустых endpoints, неверном port или неготовом backend.",
          "DNS автоматически выполняет health check HTTP.",
          "DNS заменяет NetworkPolicy.",
          "DNS создаёт Pod.",
          "DNS хранит samples."
        ],
        "answer": 0
      },
      {
        "question": "Как overlay влияет на MTU?",
        "options": [
          "Инкапсуляция добавляет заголовки и уменьшает полезный размер пакета.",
          "Увеличивает размер PVC.",
          "Отключает маршрутизацию.",
          "Заменяет SNAT.",
          "Удаляет IP Pod."
        ],
        "answer": 0
      },
      {
        "question": "Почему тест с node не заменяет тест из Pod?",
        "options": [
          "У node и Pod могут отличаться namespace, policy, source IP и маршрут трафика.",
          "Node не имеет сети.",
          "Pod не использует DNS.",
          "Node всегда блокирует TCP.",
          "Pod не имеет IP."
        ],
        "answer": 0
      },
      {
        "question": "Что может изменить SNAT исходящего трафика?",
        "options": [
          "Внешняя система будет видеть адрес node или egress gateway вместо Pod IP.",
          "Имя Deployment.",
          "UID ConfigMap.",
          "Число replicas.",
          "Роль ServiceAccount."
        ],
        "answer": 0
      },
      {
        "question": "С чего начинать сетевую диагностику?",
        "options": [
          "С фиксации source Pod, destination, порта, DNS и первой точки отказа.",
          "С удаления всех Pod.",
          "С увеличения CPU limit.",
          "С отключения NetworkPolicy.",
          "С очистки etcd."
        ],
        "answer": 0
      }
    ]
  },
  "09": {
    "title": "Kubernetes: подробный учебный материал — CNI: контракт, IPAM и подключение Pod к сети",
    "questions": [
      {
        "question": "Когда CNI подключает сеть Pod?",
        "options": [
          "Когда kubelet/runtime создаёт Pod sandbox на уже назначенной node.",
          "До решения scheduler.",
          "После удаления Deployment.",
          "Только после readiness probe.",
          "Только при создании Service."
        ],
        "answer": 0
      },
      {
        "question": "Что обычно создаёт CNI для Pod?",
        "options": [
          "Интерфейс, IP-адрес, маршруты и правила выбранного dataplane.",
          "ReplicaSet и Deployment.",
          "RBAC RoleBinding.",
          "PVC и StorageClass.",
          "TLS Secret Gateway."
        ],
        "answer": 0
      },
      {
        "question": "Что такое IPAM в контексте CNI?",
        "options": [
          "Механизм выделения и освобождения IP-адресов Pod.",
          "Алгоритм сжатия образов.",
          "Система хранения Secret.",
          "HTTP-прокси Service.",
          "Планировщик CronJob."
        ],
        "answer": 0
      },
      {
        "question": "Почему свободный IP в общем пуле не всегда помогает Pending Pod?",
        "options": [
          "Конкретная node или IPAM-блок может быть исчерпан либо иметь отдельное ограничение.",
          "Scheduler не использует IP.",
          "Pod не требует адреса.",
          "Service создаёт IP вместо CNI.",
          "IPAM работает только с PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что такое veth-пара?",
        "options": [
          "Два связанных виртуальных интерфейса, соединяющих network namespace Pod и dataplane node.",
          "Пара TLS-сертификатов.",
          "Два ReplicaSet Deployment.",
          "Режим storage replication.",
          "Два ServiceAccount."
        ],
        "answer": 0
      },
      {
        "question": "Почему CNI DEL важен?",
        "options": [
          "Он освобождает выделенный IP и сетевое состояние при удалении Pod.",
          "Он создаёт новый NodePort.",
          "Он запускает init container.",
          "Он увеличивает replicas.",
          "Он обновляет Secret."
        ],
        "answer": 0
      },
      {
        "question": "Как проявляется ошибка CNI при создании Pod?",
        "options": [
          "Pod часто остаётся в ContainerCreating с событием FailedCreatePodSandBox или network setup error.",
          "Deployment получает 403 RBAC.",
          "PVC становится Released.",
          "Service меняет ClusterIP.",
          "CronJob пропускает период."
        ],
        "answer": 0
      },
      {
        "question": "Почему обновление CNI требует поэтапного rollout?",
        "options": [
          "Разные правила dataplane на nodes могут дать частичную сетевую недоступность.",
          "CNI не зависит от node.",
          "Обновление меняет только README.",
          "CNI не влияет на Pod.",
          "CNI работает лишь в control plane."
        ],
        "answer": 0
      },
      {
        "question": "Какие данные фиксируют при CNI-инциденте?",
        "options": [
          "Pod, node, время, Events, логи CNI-agent, IP и направление трафика.",
          "Только версию kubectl.",
          "Только имя namespace.",
          "Только ClusterIP.",
          "Только число ConfigMap."
        ],
        "answer": 0
      },
      {
        "question": "Почему CNI-agent является чувствительным компонентом?",
        "options": [
          "Он имеет привилегии для изменения сети node и network namespace Pod.",
          "Он хранит только Markdown.",
          "Он не имеет доступа к ядру.",
          "Он заменяет etcd.",
          "Он работает только в браузере."
        ],
        "answer": 0
      }
    ]
  },
  "10": {
    "title": "Kubernetes: подробный учебный материал — CNI: маршрутизация, overlay и underlay",
    "questions": [
      {
        "question": "Чем overlay отличается от direct routing?",
        "options": [
          "Overlay инкапсулирует Pod-пакет между nodes, direct routing использует маршруты к Pod CIDR без такого туннеля.",
          "Overlay отключает IP Pod.",
          "Direct routing всегда использует HTTP.",
          "между ними нет различий.",
          "Direct routing создаёт PVC."
        ],
        "answer": 0
      },
      {
        "question": "Как VXLAN/Geneve влияет на MTU?",
        "options": [
          "Добавляет заголовки инкапсуляции и уменьшает доступный размер полезного пакета.",
          "Увеличивает memory limit.",
          "Удаляет Service IP.",
          "Создаёт DNS-записи.",
          "Отключает conntrack."
        ],
        "answer": 0
      },
      {
        "question": "Почему маленький запрос может проходить, а TLS зависать?",
        "options": [
          "Несовпадение MTU может затрагивать только более крупные пакеты на пути.",
          "TLS не использует сеть.",
          "CNI не назначает IP.",
          "Service не имеет порта.",
          "Pod не имеет маршрута localhost."
        ],
        "answer": 0
      },
      {
        "question": "Какую роль BGP играет в CNI-сети?",
        "options": [
          "Распространяет маршруты к Pod CIDR между сетью и nodes.",
          "Шифрует Secret.",
          "Запускает контейнеры.",
          "Выполняет query к metrics.",
          "Создаёт EndpointSlice."
        ],
        "answer": 0
      },
      {
        "question": "Почему BGP-ошибка имеет большой blast radius?",
        "options": [
          "Неверный маршрут может повлиять на достижимость целых Pod CIDR, а не одного Pod.",
          "BGP работает только в одном container.",
          "BGP не меняет маршруты.",
          "BGP ограничен одним namespace.",
          "BGP хранит логи."
        ],
        "answer": 0
      },
      {
        "question": "Зачем нужен SNAT для egress в некоторых топологиях?",
        "options": [
          "Чтобы внешний получатель возвращал ответ на известный node или gateway адрес.",
          "Чтобы Pod получил новый UID.",
          "Чтобы Service стал headless.",
          "Чтобы увеличить PVC.",
          "Чтобы отключить policy."
        ],
        "answer": 0
      },
      {
        "question": "Какое последствие SNAT важно для внешней системы?",
        "options": [
          "Она видит адрес node/egress gateway вместо исходного Pod IP.",
          "Она видит labels Pod.",
          "Она получает Secret Pod.",
          "Она создаёт ReplicaSet.",
          "Она выбирает scheduler."
        ],
        "answer": 0
      },
      {
        "question": "Что такое conntrack?",
        "options": [
          "Таблица состояния соединений, нужная в том числе для обратного NAT-трафика.",
          "Хранилище YAML-манифестов.",
          "Система выдачи IPAM.",
          "База RBAC-ролей.",
          "Механизм CSI mount."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя считать успешный ping доказательством работоспособности сервиса?",
        "options": [
          "Ping не проверяет TCP-порт, TLS, HTTP-маршрут или NetworkPolicy нужного протокола.",
          "Ping всегда удаляет Pod.",
          "Ping выдаёт RBAC-права.",
          "Ping создаёт EndpointSlice.",
          "Ping отключает SNAT."
        ],
        "answer": 0
      },
      {
        "question": "С чего начать расследование межузлового трафика Pod?",
        "options": [
          "Определить nodes, Pod IP, режим маршрутизации, маршрут и наличие policy.",
          "Удалить CNI DaemonSet.",
          "Изменить все labels.",
          "Очистить conntrack без анализа.",
          "Увеличить replicas."
        ],
        "answer": 0
      }
    ]
  },
  "11": {
    "title": "Kubernetes: подробный учебный материал — eBPF и Cilium: современный dataplane Kubernetes",
    "questions": [
      {
        "question": "Что такое eBPF в контексте Cilium?",
        "options": [
          "Механизм Linux kernel для программ, обрабатывающих сетевые события и пакеты в заданных hook.",
          "Отдельный container runtime.",
          "Формат PVC.",
          "Вид Service.",
          "Система backup etcd."
        ],
        "answer": 0
      },
      {
        "question": "Что может реализовать Cilium с помощью eBPF?",
        "options": [
          "Часть сетевого dataplane, Service load balancing, policy и наблюдаемость.",
          "Только Git-коммиты.",
          "Только хранение образов.",
          "Только CronJob.",
          "Только DNS-zone."
        ],
        "answer": 0
      },
      {
        "question": "Что означает kube-proxy replacement?",
        "options": [
          "Cilium берёт на себя реализацию Service dataplane вместо традиционного kube-proxy в выбранном режиме.",
          "kube-proxy удаляется без проверки.",
          "Service перестают иметь endpoints.",
          "CNI отключает API server.",
          "Pod не получают IP."
        ],
        "answer": 0
      },
      {
        "question": "Почему режим kube-proxy replacement нельзя включать наугад?",
        "options": [
          "Нужно проверить совместимость версии, kernel, NodePort, health check и текущего dataplane.",
          "Он меняет только UI.",
          "Он не влияет на Service.",
          "Он не требует Cilium.",
          "Он работает без node."
        ],
        "answer": 0
      },
      {
        "question": "На чём может строиться Cilium security identity?",
        "options": [
          "На наборе релевантных labels endpoint, а не на постоянном Pod IP.",
          "На UUID контейнера из лога.",
          "На имени PVC.",
          "На времени запуска Pod.",
          "На NodePort."
        ],
        "answer": 0
      },
      {
        "question": "Почему labels становятся security-контрактом при identity policy?",
        "options": [
          "Изменение label может изменить сетевые права endpoint.",
          "Labels не читаются Cilium.",
          "Labels шифруют TLS.",
          "Labels создают volume.",
          "Labels отключают scheduler."
        ],
        "answer": 0
      },
      {
        "question": "Что показывает Hubble?",
        "options": [
          "Сетевые потоки, identity и verdict policy в зависимости от включённых возможностей.",
          "Только YAML Deployment.",
          "Только содержимое Secret.",
          "Только CPU node.",
          "Только Git history."
        ],
        "answer": 0
      },
      {
        "question": "Почему доступ к Hubble нужно ограничивать?",
        "options": [
          "Flow-данные могут раскрывать внутренние связи сервисов и чувствительный контекст трафика.",
          "Hubble удаляет Pod.",
          "Hubble заменяет RBAC.",
          "Hubble не использует сеть.",
          "Hubble создаёт PVC."
        ],
        "answer": 0
      },
      {
        "question": "Когда оправдана L7 policy Cilium?",
        "options": [
          "Когда нужен явный контроль протокольного уровня и команда готова поддерживать дополнительную сложность proxy.",
          "Всегда вместо L3/L4 policy.",
          "Когда нет network traffic.",
          "Только для PVC.",
          "Только для etcd backup."
        ],
        "answer": 0
      },
      {
        "question": "Что проверять при Cilium-инциденте на node?",
        "options": [
          "Состояние agent, endpoint, policy verdict, service dataplane и совместимость kernel.",
          "Только README namespace.",
          "Только имя Deployment.",
          "Только labels Service.",
          "Только число CronJob."
        ],
        "answer": 0
      }
    ]
  },
  "12": {
    "title": "Kubernetes: подробный учебный материал — Calico и NetworkPolicy: изоляция и управляемое разрешение трафика",
    "questions": [
      {
        "question": "Что реализует Kubernetes NetworkPolicy?",
        "options": [
          "Разрешения ingress и egress для Pod, выбранных selector, если установленный CNI поддерживает enforcement.",
          "Хранение Secret.",
          "Планирование Pod.",
          "Provisioning PVC.",
          "TLS termination Gateway."
        ],
        "answer": 0
      },
      {
        "question": "Что происходит, когда Pod выбран ingress NetworkPolicy без разрешающих правил?",
        "options": [
          "Ingress для него становится изолированным и допускается только явно разрешённый трафик.",
          "Pod автоматически удаляется.",
          "Pod получает новый IP.",
          "Service удаляет endpoints.",
          "Scheduler переносит Pod."
        ],
        "answer": 0
      },
      {
        "question": "Как складываются несколько стандартных NetworkPolicy?",
        "options": [
          "Как объединение разрешений, а не как последовательный порядок deny/allow.",
          "Последняя policy отменяет все предыдущие.",
          "Первая policy всегда побеждает.",
          "Policy не могут пересекаться.",
          "Policy заменяют RBAC."
        ],
        "answer": 0
      },
      {
        "question": "Почему стандартная NetworkPolicy не может перекрыть широкий allow узким deny?",
        "options": [
          "Базовая семантика API не имеет deny-правила с приоритетом над разрешением.",
          "NetworkPolicy не выбирают Pod.",
          "CNI не видит labels.",
          "Service не имеет DNS.",
          "Pod не имеет namespace."
        ],
        "answer": 0
      },
      {
        "question": "Зачем default deny egress обычно требует DNS-исключения?",
        "options": [
          "Без разрешения DNS приложение не сможет разрешать имена зависимостей.",
          "DNS не использует сеть.",
          "DNS заменяет CNI.",
          "DNS хранится в PVC.",
          "DNS требует ClusterRole."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя оставлять 0.0.0.0/0 как постоянный обход egress policy?",
        "options": [
          "Это фактически открывает весь внешний egress и скрывает реальные зависимости.",
          "CIDR запрещён YAML.",
          "Он удаляет Pod IP.",
          "Он делает Service headless.",
          "Он останавливает scheduler."
        ],
        "answer": 0
      },
      {
        "question": "Когда предпочтителен podSelector/namespaceSelector?",
        "options": [
          "Для внутрикластерных ролей, которые устойчиво выражены labels и namespace.",
          "Для уникального request_id.",
          "Для размера диска.",
          "Для TLS cipher.",
          "Для версии kubectl."
        ],
        "answer": 0
      },
      {
        "question": "Когда уместен ipBlock?",
        "options": [
          "Для внешних сетей с устойчивыми и контролируемыми CIDR.",
          "Для выбора Pod по label.",
          "Для работы kubelet.",
          "Для создания ReplicaSet.",
          "Для хранения ConfigMap."
        ],
        "answer": 0
      },
      {
        "question": "Как безопасно внедрять default deny?",
        "options": [
          "Сначала инвентаризировать потоки, разрешить DNS/зависимости и проверить ограниченный namespace.",
          "Сразу применить во всех namespace.",
          "Удалить CNI-agent.",
          "Отключить Service.",
          "Очистить events."
        ],
        "answer": 0
      },
      {
        "question": "Чем Calico-специфичная policy отличается от стандартной NetworkPolicy?",
        "options": [
          "Она может давать дополнительные возможности, но привязывает правило к реализации Calico.",
          "Она не влияет на сеть.",
          "Она заменяет Kubernetes API.",
          "Она хранит PVC.",
          "Она удаляет labels."
        ],
        "answer": 0
      }
    ]
  },
  "13": {
    "title": "Kubernetes: подробный учебный материал — Service и внутренний доступ: стабильная точка для Pod",
    "questions": [
      {
        "question": "Какую роль выполняет «Почему не Pod IP»?",
        "options": [
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной."
        ],
        "answer": 4
      },
      {
        "question": "Как работает «Почему не Pod IP — дополнительный аспект» в этой ситуации?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "ClusterIP доступен в кластере.",
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy."
        ],
        "answer": 0
      },
      {
        "question": "Какое свойство «Типы Service» технически верно?",
        "options": [
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "ClusterIP доступен в кластере.",
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какой результат ожидается от «Типы Service — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ClusterIP доступен в кластере.",
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy.",
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node."
        ],
        "answer": 0
      },
      {
        "question": "Какой технический принцип верен для «Порты и именование»?",
        "options": [
          "ClusterIP доступен в кластере.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение о «Порты и именование — дополнительный аспект» корректно?",
        "options": [
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «EndpointSlice и готовность»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какой механизм лежит в основе «EndpointSlice и готовность — дополнительный аспект»?",
        "options": [
          "EndpointSlice масштабируемо представляет backends и их readiness.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ClusterIP доступен в кластере.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Session и source IP»?",
        "options": [
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение о «Session и source IP — дополнительный аспект» корректно?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ClusterIP доступен в кластере.",
          "sessionAffinity ClientIP даёт простое закрепление, но не заменяет корректную сессию приложения и может не работать как ожидается через NAT/proxy.",
          "Pod эфемерен: controller пересоздаёт его, IP меняется, node может стать недоступной.",
          "port — порт Service, targetPort — порт контейнера/endpoint, nodePort — внешний порт node."
        ],
        "answer": 0
      }
    ]
  },
  "14": {
    "title": "Kubernetes: подробный учебный материал — NetworkPolicy в production: модель угроз, rollout и диагностика",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Граница и модель угроз»?",
        "options": [
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Предпочитайте labels и namespace selectors для внутрикластерных сервисов, когда они отражают роль.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение о «Граница и модель угроз — дополнительный аспект» корректно?",
        "options": [
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений.",
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Default deny»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какой механизм лежит в основе «Default deny — дополнительный аспект»?",
        "options": [
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений.",
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Идентификация зависимостей»?",
        "options": [
          "Предпочитайте labels и namespace selectors для внутрикластерных сервисов, когда они отражают роль.",
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение о «Идентификация зависимостей — дополнительный аспект» корректно?",
        "options": [
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов.",
          "Предпочитайте labels и namespace selectors для внутрикластерных сервисов, когда они отражают роль.",
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Проверка эффекта»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какой механизм лежит в основе «Проверка эффекта — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов.",
          "Тест должен запускаться от того же ServiceAccount/namespace и идти из Pod, где реально возникает поток.",
          "Предпочитайте labels и namespace selectors для внутрикластерных сервисов, когда они отражают роль.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений."
        ],
        "answer": 0
      },
      {
        "question": "Какой технический принцип верен для «Инциденты и откат»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений.",
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение о «Инциденты и откат — дополнительный аспект» корректно?",
        "options": [
          "NetworkPolicy ограничивает сетевые связи Pods, но не заменяет RBAC, TLS, identity приложения, image security или secrets.",
          "Предпочитайте labels и namespace selectors для внутрикластерных сервисов, когда они отражают роль.",
          "Default deny выбирает все Pods namespace и включает PolicyTypes Ingress/Egress без разрешений.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При массовом deny первым делом ограничьте blast radius и верните проверенный набор предыдущих манифестов."
        ],
        "answer": 3
      }
    ]
  },
  "15": {
    "title": "Kubernetes: подробный учебный материал — Ingress: традиционная модель HTTP-маршрутизации и её границы",
    "questions": [
      {
        "question": "Какую роль выполняет «Ingress и Ingress Controller»?",
        "options": [
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP."
        ],
        "answer": 0
      },
      {
        "question": "Как работает «Ingress и Ingress Controller — дополнительный аспект» в этой ситуации?",
        "options": [
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Путь запроса»?",
        "options": [
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP."
        ],
        "answer": 0
      },
      {
        "question": "Какой механизм лежит в основе «Путь запроса — дополнительный аспект»?",
        "options": [
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key.",
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP."
        ],
        "answer": 2
      },
      {
        "question": "Какое правило безопасности верно для «TLS»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key."
        ],
        "answer": 4
      },
      {
        "question": "Какое ограничение необходимо учитывать при «TLS — дополнительный аспект»?",
        "options": [
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key.",
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели."
        ],
        "answer": 2
      },
      {
        "question": "Что необходимо учитывать при «Ограничения API»?",
        "options": [
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какой механизм лежит в основе «Ограничения API — дополнительный аспект»?",
        "options": [
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP.",
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое правило безопасности верно для «Безопасная эксплуатация»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Ingress исторически фокусируется на HTTP и оставляет расширенные возможности аннотациям конкретного controller: retries, canary, header matching, traffic splitting, TCP/UDP.",
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели."
        ],
        "answer": 4
      },
      {
        "question": "Какое ограничение необходимо учитывать при «Безопасная эксплуатация — дополнительный аспект»?",
        "options": [
          "Ingress — API-объект для HTTP/HTTPS маршрутов host/path к Service.",
          "Не смешивайте public и internal маршруты в одном классе без явной модели.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Клиент приходит на внешний LoadBalancer/NodePort controller, TLS может завершиться там, controller выбирает правило host/path и отправляет запрос в Service, затем в endpoint Pod.",
          "tls.secretName обычно ссылается на Secret того же namespace, содержащий certificate/key."
        ],
        "answer": 2
      }
    ]
  },
  "16": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: современная модель ролей, классов и маршрутов",
    "questions": [
      {
        "question": "Какую роль выполняет «Почему Gateway API»?",
        "options": [
          "Не мигрируйте механически аннотации.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования.",
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы."
        ],
        "answer": 3
      },
      {
        "question": "Как работает «Почему Gateway API — дополнительный аспект» в этой ситуации?",
        "options": [
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Не мигрируйте механически аннотации.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования."
        ],
        "answer": 2
      },
      {
        "question": "Какое свойство «GatewayClass и Gateway» технически верно?",
        "options": [
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Не мигрируйте механически аннотации."
        ],
        "answer": 3
      },
      {
        "question": "Какой результат ожидается от «GatewayClass и Gateway — дополнительный аспект»?",
        "options": [
          "Не мигрируйте механически аннотации.",
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой технический принцип верен для «Routes и attachment»?",
        "options": [
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение о «Routes и attachment — дополнительный аспект» корректно?",
        "options": [
          "Не мигрируйте механически аннотации.",
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования."
        ],
        "answer": 3
      },
      {
        "question": "Что необходимо учитывать при «Статус как контракт»?",
        "options": [
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Не мигрируйте механически аннотации.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования."
        ],
        "answer": 0
      },
      {
        "question": "Какой механизм лежит в основе «Статус как контракт — дополнительный аспект»?",
        "options": [
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "HTTPRoute, GRPCRoute, TCPRoute, TLSRoute и UDPRoute описывают правила направления.",
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какую роль выполняет «Переход от Ingress»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Не мигрируйте механически аннотации.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой."
        ],
        "answer": 1
      },
      {
        "question": "Как работает «Переход от Ingress — дополнительный аспект» в этой ситуации?",
        "options": [
          "Gateway API активно использует conditions Accepted, Programmed, ResolvedRefs и другие статусы.",
          "GatewayClass описывает класс реализации, управляемый инфраструктурной командой.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway API развивает модель Ingress: разделяет владельца инфраструктуры и владельца маршрута, стандартизирует HTTP, TLS, TCP, UDP и gRPC маршрутизацию, а также статус программирования.",
          "Не мигрируйте механически аннотации."
        ],
        "answer": 2
      }
    ]
  },
  "17": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: HTTP-маршрутизация, TLS и политики",
    "questions": [
      {
        "question": "Какой технический принцип верен для «HTTPRoute»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс.",
          "Проверяйте DNS, SNI, сертификат/цепочку, listener status, HTTPRoute Accepted/Programmed, Service endpoints и ответ backend.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "HTTPRoute сопоставляет hostnames и matches: path, headers, query parameters, method."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «HTTPRoute — дополнительный аспект» корректно?",
        "options": [
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс.",
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend.",
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "HTTPRoute сопоставляет hostnames и matches: path, headers, query parameters, method.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой контроль следует сохранить при «Разделение TLS»?",
        "options": [
          "HTTPRoute сопоставляет hostnames и matches: path, headers, query parameters, method.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend."
        ],
        "answer": 4
      },
      {
        "question": "Какое действие было бы небезопасным при «Разделение TLS — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "HTTPRoute сопоставляет hostnames и matches: path, headers, query parameters, method.",
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс."
        ],
        "answer": 0
      },
      {
        "question": "Какой технический принцип верен для «Cross-namespace ссылки»?",
        "options": [
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Cross-namespace ссылки — дополнительный аспект» корректно?",
        "options": [
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend.",
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "Проверяйте DNS, SNI, сертификат/цепочку, listener status, HTTPRoute Accepted/Programmed, Service endpoints и ответ backend.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс."
        ],
        "answer": 3
      },
      {
        "question": "Что необходимо учитывать при «Traffic filters и portability»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс.",
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какой механизм лежит в основе «Traffic filters и portability — дополнительный аспект»?",
        "options": [
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс.",
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "Проверяйте DNS, SNI, сертификат/цепочку, listener status, HTTPRoute Accepted/Programmed, Service endpoints и ответ backend.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое правило безопасности верно для «TLS и проверки»?",
        "options": [
          "Redirect, URL rewrite, request/response header modification и traffic split должны быть сформулированы как явно тестируемые правила.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Проверяйте DNS, SNI, сертификат/цепочку, listener status, HTTPRoute Accepted/Programmed, Service endpoints и ответ backend.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое ограничение необходимо учитывать при «TLS и проверки — дополнительный аспект»?",
        "options": [
          "HTTPRoute сопоставляет hostnames и matches: path, headers, query parameters, method.",
          "Проверяйте DNS, SNI, сертификат/цепочку, listener status, HTTPRoute Accepted/Programmed, Service endpoints и ответ backend.",
          "ReferenceGrant позволяет владельцу целевого namespace явно разрешить ссылку от другого namespace на Service/Secret/другой ресурс.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "TLS termination означает: Gateway принимает TLS, имеет сертификат Secret/certificateRef и передаёт HTTP backend."
        ],
        "answer": 3
      }
    ]
  },
  "18": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: L4, gRPC и безопасная миграция",
    "questions": [
      {
        "question": "Какой технический принцип верен для «L4 и L7»?",
        "options": [
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение о «L4 и L7 — дополнительный аспект» корректно?",
        "options": [
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "gRPC использует HTTP/2, service/method и длительные потоки.",
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «GRPCRoute»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "gRPC использует HTTP/2, service/method и длительные потоки."
        ],
        "answer": 4
      },
      {
        "question": "Какой механизм лежит в основе «GRPCRoute — дополнительный аспект»?",
        "options": [
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Проверяйте маршрут по отдельному тестовому hostname или контролируемому клиенту, включая DNS, TLS, заголовки, auth, response body и long-lived connections.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какую роль выполняет «Миграция с Ingress»?",
        "options": [
          "gRPC использует HTTP/2, service/method и длительные потоки.",
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts."
        ],
        "answer": 4
      },
      {
        "question": "Как работает «Миграция с Ingress — дополнительный аспект» в этой ситуации?",
        "options": [
          "gRPC использует HTTP/2, service/method и длительные потоки.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Проверка и переключение»?",
        "options": [
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "Проверяйте маршрут по отдельному тестовому hostname или контролируемому клиенту, включая DNS, TLS, заголовки, auth, response body и long-lived connections.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какой механизм лежит в основе «Проверка и переключение — дополнительный аспект»?",
        "options": [
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "gRPC использует HTTP/2, service/method и длительные потоки.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Проверяйте маршрут по отдельному тестовому hostname или контролируемому клиенту, включая DNS, TLS, заголовки, auth, response body и long-lived connections."
        ],
        "answer": 3
      },
      {
        "question": "Какой технический принцип верен для «Эксплуатационная граница»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "gRPC использует HTTP/2, service/method и длительные потоки.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Эксплуатационная граница — дополнительный аспект» корректно?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Соберите инвентарь Ingress: class, host/path, annotations, TLS, backend, canary, external auth, source IP и timeouts.",
          "TCPRoute направляет непрозрачный TCP-поток, UDPRoute — UDP, TLSRoute маршрутизирует TLS по SNI без termination при поддержке implementation.",
          "Gateway controller, external LoadBalancer, cert-manager, DNS и backend Service образуют одну цепочку.",
          "gRPC использует HTTP/2, service/method и длительные потоки."
        ],
        "answer": 0
      }
    ]
  },
  "19": {
    "title": "Kubernetes: подробный учебный материал — RBAC, admission и безопасность Kubernetes",
    "questions": [
      {
        "question": "Какую роль выполняет «Identity и ServiceAccount»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его."
        ],
        "answer": 1
      },
      {
        "question": "Как работает «Identity и ServiceAccount — дополнительный аспект» в этой ситуации?",
        "options": [
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой контроль следует сохранить при «RBAC»?",
        "options": [
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое действие было бы небезопасным при «RBAC — дополнительный аспект»?",
        "options": [
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy."
        ],
        "answer": 1
      },
      {
        "question": "Какое правило безопасности верно для «Admission и политики»?",
        "options": [
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое ограничение необходимо учитывать при «Admission и политики — дополнительный аспект»?",
        "options": [
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy."
        ],
        "answer": 1
      },
      {
        "question": "Какой контроль следует сохранить при «Pod security»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое действие было бы небезопасным при «Pod security — дополнительный аспект»?",
        "options": [
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Контейнеры запускайте non-root, без privileged, с drop capabilities, read-only root filesystem там, где возможно, seccomp и минимальными volumes."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Supply chain и audit»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение о «Supply chain и audit — дополнительный аспект» корректно?",
        "options": [
          "Kubernetes API сначала устанавливает identity, затем authorizer решает разрешён ли verb над resource/subresource в namespace или кластере.",
          "Role действует в namespace, ClusterRole — кластерно или может быть привязан в namespace.",
          "Используйте фиксированные image digests или контролируемые теги, сканирование, подпись и registry policy.",
          "Mutating admission добавляет/изменяет объект, validating admission принимает/отклоняет его.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "20": {
    "title": "Kubernetes: подробный учебный материал — Наблюдаемость Kubernetes: метрики, логи, события и трассировка",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Слои наблюдаемости»?",
        "options": [
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение о «Слои наблюдаемости — дополнительный аспект» корректно?",
        "options": [
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation."
        ],
        "answer": 3
      },
      {
        "question": "Что необходимо учитывать при «Состояние объектов»?",
        "options": [
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь."
        ],
        "answer": 3
      },
      {
        "question": "Какой механизм лежит в основе «Состояние объектов — дополнительный аспект»?",
        "options": [
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Метрики ресурса»?",
        "options": [
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение о «Метрики ресурса — дополнительный аспект» корректно?",
        "options": [
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Логи и контекст»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation."
        ],
        "answer": 4
      },
      {
        "question": "Какой механизм лежит в основе «Логи и контекст — дополнительный аспект»?",
        "options": [
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "CPU, memory, filesystem, network и saturation node нужны вместе с requests/limits.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает."
        ],
        "answer": 1
      },
      {
        "question": "Какой технический принцип верен для «Alert и SLO»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение о «Alert и SLO — дополнительный аспект» корректно?",
        "options": [
          "Собирайте conditions Deployment, Pod, Node, PVC, Gateway и их transition time.",
          "Alert должен соответствовать действию: недоступен API, нет ready replicas, исчерпан IPAM, Gateway не программируется, certificate истекает.",
          "Собирайте stdout/stderr контейнеров, логи kubelet/runtime и CNI, сохраняя namespace, Pod, container, node, image и trace/request correlation.",
          "Наблюдаемость кластера включает control plane, nodes, kubelet/runtime, CNI, workloads и пользовательский путь.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "21": {
    "title": "Kubernetes: подробный учебный материал — Установка, обновление и высокая доступность Kubernetes",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Дизайн кластера»?",
        "options": [
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Дизайн кластера — дополнительный аспект» корректно?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum."
        ],
        "answer": 0
      },
      {
        "question": "Какое свойство «Control plane и etcd» технически верно?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop."
        ],
        "answer": 3
      },
      {
        "question": "Какой результат ожидается от «Control plane и etcd — дополнительный аспект»?",
        "options": [
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Обновление»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение о «Обновление — дополнительный аспект» корректно?",
        "options": [
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Drain и workloads»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets."
        ],
        "answer": 4
      },
      {
        "question": "Какой механизм лежит в основе «Drain и workloads — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets.",
          "API servers работают за стабильной точкой доступа; etcd требует нечётного числа членов для quorum.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop."
        ],
        "answer": 0
      },
      {
        "question": "Какой технический принцип верен для «Rollback и проверка»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Rollback и проверка — дополнительный аспект» корректно?",
        "options": [
          "Планируйте upgrade по поддерживаемому version skew: control plane, nodes, kubelet, CNI, CSI и addons должны быть совместимы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "До установки выберите CIDR Pod/Service без пересечений, topology control plane, container runtime, CNI, ingress/Gateway, storage и механизм доступа.",
          "cordon предотвращает новое размещение, drain выселяет управляемые Pods с учётом PDB и daemonsets.",
          "Rollback определяется до изменения: версия образов/манифестов, backup, точка восстановления и критерий stop."
        ],
        "answer": 1
      }
    ]
  },
  "22": {
    "title": "Kubernetes: подробный учебный материал — Диагностика Kubernetes: системный путь от симптома к причине",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Факт и граница»?",
        "options": [
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Начните с точного симптома, времени, области и пользовательского результата."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Факт и граница — дополнительный аспект» корректно?",
        "options": [
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "После изменения повторите исходный пользовательский тест, затем проверьте метрики/alerts."
        ],
        "answer": 2
      },
      {
        "question": "Что необходимо учитывать при «Workload»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какой механизм лежит в основе «Workload — дополнительный аспект»?",
        "options": [
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "После изменения повторите исходный пользовательский тест, затем проверьте метрики/alerts.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой технический принцип верен для «Сеть»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение о «Сеть — дополнительный аспект» корректно?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Deployment → ReplicaSet → Pod — базовая цепочка."
        ],
        "answer": 0
      },
      {
        "question": "Что необходимо учитывать при «Control plane»?",
        "options": [
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какой механизм лежит в основе «Control plane — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "После изменения повторите исходный пользовательский тест, затем проверьте метрики/alerts."
        ],
        "answer": 0
      },
      {
        "question": "Какой технический принцип верен для «Завершение инцидента»?",
        "options": [
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "После изменения повторите исходный пользовательский тест, затем проверьте метрики/alerts."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Завершение инцидента — дополнительный аспект» корректно?",
        "options": [
          "Для сетевого сбоя определите source Pod/namespace, destination IP/name/port, DNS и first failing hop.",
          "Начните с точного симптома, времени, области и пользовательского результата.",
          "При API errors отделите authentication, authorization, admission, validation и etcd/control-plane availability.",
          "Deployment → ReplicaSet → Pod — базовая цепочка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "23": {
    "title": "Kubernetes: подробный учебный материал — GitOps, Helm и поставки Kubernetes-приложений",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Декларативный источник истины»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Chart параметризует шаблоны Kubernetes.",
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Декларативный источник истины — дополнительный аспект» корректно?",
        "options": [
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками.",
          "Chart параметризует шаблоны Kubernetes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Что необходимо учитывать при «Helm»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Chart параметризует шаблоны Kubernetes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какой механизм лежит в основе «Helm — дополнительный аспект»?",
        "options": [
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Chart параметризует шаблоны Kubernetes.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения."
        ],
        "answer": 2
      },
      {
        "question": "Какой технический принцип верен для «Поставка»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Chart параметризует шаблоны Kubernetes.",
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Поставка — дополнительный аспект» корректно?",
        "options": [
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками.",
          "Chart параметризует шаблоны Kubernetes.",
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой контроль следует сохранить при «Secrets и окружения»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое действие было бы небезопасным при «Secrets и окружения — дополнительный аспект»?",
        "options": [
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками.",
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой технический принцип верен для «Rollback»?",
        "options": [
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение о «Rollback — дополнительный аспект» корректно?",
        "options": [
          "Откат — это новая декларация к известной версии, но rollback приложения может быть несовместим с миграцией данных.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "GitOps хранит желаемое состояние в Git, а контроллер в кластере сравнивает его с API и согласует изменения.",
          "Pipeline проверяет YAML/render, schema, policy, image digest, tests и diff.",
          "Окружения отличаются явными параметрами, а не копиями шаблонов с ручными правками."
        ],
        "answer": 1
      }
    ]
  },
  "24": {
    "title": "Kubernetes: подробный учебный материал — Итоговый production-проект: проектирование Kubernetes-платформы и приложения",
    "questions": [
      {
        "question": "Какой технический принцип верен для «Исходная архитектура»?",
        "options": [
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение о «Исходная архитектура — дополнительный аспект» корректно?",
        "options": [
          "Определите SLO и проверяемый пользовательский индикатор.",
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability."
        ],
        "answer": 3
      },
      {
        "question": "Что необходимо учитывать при «Платформенные границы»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какой механизм лежит в основе «Платформенные границы — дополнительный аспект»?",
        "options": [
          "Определите SLO и проверяемый пользовательский индикатор.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS."
        ],
        "answer": 3
      },
      {
        "question": "Какой технический принцип верен для «Надёжность»?",
        "options": [
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Определите SLO и проверяемый пользовательский индикатор."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение о «Надёжность — дополнительный аспект» корректно?",
        "options": [
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback.",
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS."
        ],
        "answer": 2
      },
      {
        "question": "Какой контроль следует сохранить при «Безопасность»?",
        "options": [
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS.",
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback."
        ],
        "answer": 3
      },
      {
        "question": "Какое действие было бы небезопасным при «Безопасность — дополнительный аспект»?",
        "options": [
          "Определите SLO и проверяемый пользовательский индикатор.",
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какой технический принцип верен для «Приёмка»?",
        "options": [
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение о «Приёмка — дополнительный аспект» корректно?",
        "options": [
          "Спроектируйте сервис с несколькими репликами, Service, storage при необходимости, CNI и default-deny NetworkPolicy, Gateway API edge и observability.",
          "Platform team управляет GatewayClass, listeners, certificates, CNI, StorageClass, RBAC baseline и observability.",
          "Приёмка завершена, когда документация описывает topology, CIDR, CNI/Gateway implementation, flow policies, backup/restore, upgrade и incident runbook; pipeline воспроизводит deployment; тесты подтверждают разрешённый и запрещённый трафик, TLS и rollback.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Примените least privilege для ServiceAccount/RBAC, restricted pod security, подписанные/сканированные образы, Secrets из управляемого источника, NetworkPolicy и TLS."
        ],
        "answer": 3
      }
    ]
  }
};
