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
        "question": "Почему нельзя использовать Pod IP как постоянный адрес приложения?",
        "options": [
          "Pod может быть пересоздан и получить другой IP.",
          "Pod IP не маршрутизируется внутри кластера.",
          "Pod не имеет сети.",
          "Pod всегда равен ClusterIP.",
          "Pod IP доступен только kubelet."
        ],
        "answer": 0
      },
      {
        "question": "Что даёт ClusterIP Service?",
        "options": [
          "Стабильный виртуальный адрес для доступа к набору backend Pod внутри кластера.",
          "Постоянный IP каждого Pod.",
          "Внешний публичный TLS listener.",
          "Хранилище данных.",
          "RBAC-доступ к API."
        ],
        "answer": 0
      },
      {
        "question": "Что проверять, если Service создан, но endpoints пусты?",
        "options": [
          "Selector Service, labels Pod и readiness подходящих Pod.",
          "Только версию kubectl.",
          "Только UID Service.",
          "Только ConfigMap.",
          "Только CNI image."
        ],
        "answer": 0
      },
      {
        "question": "Чем port отличается от targetPort Service?",
        "options": [
          "port — порт Service, targetPort — порт backend контейнера или endpoint.",
          "port всегда внешний NodePort.",
          "targetPort задаёт IP Pod.",
          "между ними нет различия.",
          "targetPort задаёт CPU limit."
        ],
        "answer": 0
      },
      {
        "question": "Когда нужен headless Service?",
        "options": [
          "Когда клиенту требуются DNS-записи отдельных endpoint, например StatefulSet.",
          "Когда нужен внешний LoadBalancer.",
          "Когда нельзя использовать DNS.",
          "Когда нужно запретить endpoints.",
          "Когда нужен PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что делает NodePort?",
        "options": [
          "Открывает выделенный порт на node и направляет трафик к Service.",
          "Назначает Pod IP.",
          "Создаёт GatewayClass.",
          "Шифрует Secret.",
          "Хранит логи."
        ],
        "answer": 0
      },
      {
        "question": "От чего зависит LoadBalancer Service?",
        "options": [
          "От контроллера или сетевой интеграции, которая создаёт внешний балансировщик.",
          "Только от YAML Service.",
          "Только от kubelet.",
          "Только от CoreDNS.",
          "Только от PVC."
        ],
        "answer": 0
      },
      {
        "question": "Почему EndpointSlice важнее одного факта наличия Service?",
        "options": [
          "Он показывает реальные backend, порты и readiness, к которым направится трафик.",
          "Он хранит Git history.",
          "Он заменяет NetworkPolicy.",
          "Он задаёт DNS zone.",
          "Он создаёт image."
        ],
        "answer": 0
      },
      {
        "question": "Как externalTrafficPolicy влияет на внешний трафик?",
        "options": [
          "Влияет на сохранение source IP и способ распределения через nodes.",
          "Меняет labels Pod.",
          "Удаляет readiness probe.",
          "Создаёт PVC.",
          "Выдаёт RBAC."
        ],
        "answer": 0
      },
      {
        "question": "Что проверять при connection refused через Service?",
        "options": [
          "targetPort, порт приложения, EndpointSlice и readiness backend.",
          "Только имя namespace.",
          "Только etcd snapshot.",
          "Только число Deployment.",
          "Только cron schedule."
        ],
        "answer": 0
      }
    ]
  },
  "14": {
    "title": "Kubernetes: подробный учебный материал — NetworkPolicy в production: модель угроз, rollout и диагностика",
    "questions": [
      {
        "question": "Что NetworkPolicy не заменяет?",
        "options": [
          "RBAC, TLS, безопасность образов и защиту Secret.",
          "Она заменяет все CNI.",
          "Она заменяет Pod.",
          "Она заменяет Deployment.",
          "Она заменяет etcd."
        ],
        "answer": 0
      },
      {
        "question": "Что означает default deny ingress?",
        "options": [
          "Для выбранных Pod ingress разрешён только правилами, которые явно совпали.",
          "Pod удаляется.",
          "Service исчезает.",
          "Pod теряет IP.",
          "CNI отключается."
        ],
        "answer": 0
      },
      {
        "question": "Почему default deny egress внедряют поэтапно?",
        "options": [
          "Нужно заранее выявить DNS и обязательные зависимости, иначе легко сломать приложение.",
          "Egress policy не влияет на сеть.",
          "Policy нельзя хранить в Git.",
          "Pod не имеет зависимостей.",
          "DNS не использует сеть."
        ],
        "answer": 0
      },
      {
        "question": "Какой тест нужен для NetworkPolicy?",
        "options": [
          "Позитивный тест разрешённого потока и негативный тест запрещённого потока.",
          "Только kubectl get policy.",
          "Только ping node.",
          "Только число Pod.",
          "Только запуск HPA."
        ],
        "answer": 0
      },
      {
        "question": "Почему тест должен идти из Pod источника?",
        "options": [
          "Только так проверяются реальные namespace, labels, source IP и policy path.",
          "Node не может отправить пакеты.",
          "Pod не имеет DNS.",
          "Service не имеет портов.",
          "CNI не работает с Pod."
        ],
        "answer": 0
      },
      {
        "question": "Почему 0.0.0.0/0 опасен в egress rule?",
        "options": [
          "Открывает весь внешний трафик и маскирует неописанные зависимости.",
          "Запрещён Kubernetes API.",
          "Удаляет routes.",
          "Создаёт слишком много Pod.",
          "Меняет StorageClass."
        ],
        "answer": 0
      },
      {
        "question": "Что лучше использовать для внутрикластерного backend?",
        "options": [
          "Стабильный selector по роли Pod/namespace, если он отражает реальную границу.",
          "Уникальный request_id label.",
          "IP случайного Pod.",
          "Timestamp запуска.",
          "Имя container image."
        ],
        "answer": 0
      },
      {
        "question": "Что делать при массовом deny после policy rollout?",
        "options": [
          "Ограничить blast radius и вернуть проверенный предыдущий набор правил.",
          "Открыть весь egress навсегда.",
          "Удалить CNI.",
          "Удалить все namespace.",
          "Очистить etcd."
        ],
        "answer": 0
      },
      {
        "question": "Почему policy должны проходить review?",
        "options": [
          "Это код сетевой безопасности, который может открыть или перекрыть production-потоки.",
          "Policy не меняют трафик.",
          "Review нужен только PVC.",
          "Policy не поддерживают Git.",
          "Review создаёт Pod."
        ],
        "answer": 0
      },
      {
        "question": "Что требуется после временного широкого разрешения?",
        "options": [
          "Зафиксировать отсутствующий поток и заменить обход точным правилом.",
          "Оставить allow all.",
          "Удалить Service.",
          "Перезапустить etcd.",
          "Увеличить replicas."
        ],
        "answer": 0
      }
    ]
  },
  "15": {
    "title": "Kubernetes: подробный учебный материал — Ingress: традиционная модель HTTP-маршрутизации и её границы",
    "questions": [
      {
        "question": "Что делает объект Ingress сам по себе?",
        "options": [
          "Описывает HTTP(S)-маршруты, но не проксирует трафик без Ingress Controller.",
          "Запускает reverse proxy в каждом Pod.",
          "Создаёт Service endpoints.",
          "Выдаёт Pod IP.",
          "Хранит TLS key в etcd."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужен IngressClass?",
        "options": [
          "Связывает Ingress с конкретной реализацией контроллера.",
          "Выбирает node Pod.",
          "Создаёт Secret.",
          "Управляет PVC.",
          "Хранит метрики."
        ],
        "answer": 0
      },
      {
        "question": "Каков путь запроса через Ingress?",
        "options": [
          "Клиент, внешний балансировщик/контроллер, правило host/path, Service, endpoint Pod.",
          "Клиент, etcd, PVC, Pod.",
          "Клиент, scheduler, Secret.",
          "Клиент, CNI IPAM, ConfigMap.",
          "Клиент, ReplicaSet, StorageClass."
        ],
        "answer": 0
      },
      {
        "question": "Почему существование TLS Secret не доказывает работу HTTPS?",
        "options": [
          "Controller должен прочитать Secret и применить его к правильному listener/hostname.",
          "Secret всегда сам открывает порт.",
          "TLS не зависит от hostname.",
          "Secret создаёт Pod.",
          "Secret заменяет IngressClass."
        ],
        "answer": 0
      },
      {
        "question": "Почему annotations Ingress ограничивают переносимость?",
        "options": [
          "Их смысл и поддержка зависят от конкретного Ingress Controller.",
          "Annotations запрещены YAML.",
          "Annotations не хранятся API.",
          "Annotations заменяют Service.",
          "Annotations работают только с PVC."
        ],
        "answer": 0
      },
      {
        "question": "Почему Ingress называют frozen API?",
        "options": [
          "Новые возможности маршрутизации развиваются прежде всего в Gateway API.",
          "Ingress удалён из Kubernetes.",
          "Ingress не поддерживает HTTP.",
          "Ingress не имеет API.",
          "Ingress работает только с DNS."
        ],
        "answer": 0
      },
      {
        "question": "Что проверять при 404 от Ingress?",
        "options": [
          "IngressClass, hostname/path rule, controller и маршрут до Service.",
          "Только memory limit Pod.",
          "Только UID Secret.",
          "Только PV reclaimPolicy.",
          "Только CronJob."
        ],
        "answer": 0
      },
      {
        "question": "Что проверять при 502 от Ingress?",
        "options": [
          "Service, EndpointSlice, readiness backend и сетевой путь controller к Pod.",
          "Только Git branch.",
          "Только annotation автора.",
          "Только namespace UID.",
          "Только volumeMode."
        ],
        "answer": 0
      },
      {
        "question": "Почему edge controller требует отдельного capacity planning?",
        "options": [
          "Он обслуживает трафик многих команд и становится shared точкой насыщения.",
          "Он не принимает трафик.",
          "Он не имеет Pod.",
          "Он заменяет API server.",
          "Он не использует CPU."
        ],
        "answer": 0
      },
      {
        "question": "Зачем ограничивать допустимые annotations admission policy?",
        "options": [
          "Чтобы tenant не включил опасную или неподдерживаемую настройку edge.",
          "Чтобы удалить DNS.",
          "Чтобы отключить RBAC.",
          "Чтобы создать PVC.",
          "Чтобы увеличить MTU."
        ],
        "answer": 0
      }
    ]
  },
  "16": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: современная модель ролей, классов и маршрутов",
    "questions": [
      {
        "question": "Какую роль выполняет GatewayClass?",
        "options": [
          "Определяет класс реализации Gateway, которым обычно управляет platform team.",
          "Описывает один HTTP path приложения.",
          "Создаёт Pod IP.",
          "Хранит Secret.",
          "Выбирает StorageClass."
        ],
        "answer": 0
      },
      {
        "question": "Что описывает Gateway?",
        "options": [
          "Конкретную точку входа и listeners с портами, протоколами, TLS и правилами attachment.",
          "Отдельный контейнер приложения.",
          "Только DNS-запись Pod.",
          "Только NetworkPolicy.",
          "Только PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что описывает HTTPRoute?",
        "options": [
          "Правила L7-маршрутизации к backend через Gateway.",
          "Схему etcd backup.",
          "Выбор node scheduler.",
          "Выделение IPAM.",
          "Ротацию Secret."
        ],
        "answer": 0
      },
      {
        "question": "Зачем listener allowedRoutes?",
        "options": [
          "Ограничивает, какие Route и из каких namespace могут прикрепляться к listener.",
          "Открывает весь egress.",
          "Создаёт endpoint Pod.",
          "Шифрует volume.",
          "Удаляет GatewayClass."
        ],
        "answer": 0
      },
      {
        "question": "Что означает Route condition Accepted?",
        "options": [
          "Реализация приняла объект маршрута как допустимый.",
          "Dataplane обязательно уже доступен клиенту.",
          "TLS сертификат истёк.",
          "Pod получил IP.",
          "PVC смонтирован."
        ],
        "answer": 0
      },
      {
        "question": "Что означает Programmed?",
        "options": [
          "Контроллер сообщает, что dataplane был настроен в смысле своей реализации.",
          "ServiceAccount получил cluster-admin.",
          "Pod удалён.",
          "CNI отключён.",
          "Backup завершён."
        ],
        "answer": 0
      },
      {
        "question": "Зачем проверять ResolvedRefs?",
        "options": [
          "Чтобы убедиться, что backend и другие ссылки разрешены и существуют.",
          "Чтобы измерить CPU node.",
          "Чтобы выбрать ImagePullPolicy.",
          "Чтобы создать namespace.",
          "Чтобы прочитать логи."
        ],
        "answer": 0
      },
      {
        "question": "Чем Gateway API улучшает разделение ролей?",
        "options": [
          "Платформа владеет edge/listener, а приложение — разрешённым Route.",
          "Все команды получают cluster-admin.",
          "Route создаёт node.",
          "Gateway заменяет Service.",
          "Pod перестают использовать labels."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя переносить Ingress annotations механически?",
        "options": [
          "Часть настроек vendor-specific и должна быть сопоставлена со стандартом или policy реализации.",
          "Gateway API не поддерживает HTTP.",
          "Annotations нельзя читать.",
          "Ingress не имеет routes.",
          "CNI блокирует YAML."
        ],
        "answer": 0
      },
      {
        "question": "Как безопасно мигрировать host с Ingress?",
        "options": [
          "Сначала проверить параллельный Gateway-путь и поведение, затем контролируемо переключить DNS/трафик.",
          "Сразу удалить Ingress и Secret.",
          "Удалить все Service.",
          "Отключить CNI.",
          "Пересоздать etcd."
        ],
        "answer": 0
      }
    ]
  },
  "17": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: HTTP-маршрутизация, TLS и политики",
    "questions": [
      {
        "question": "Что может сопоставлять HTTPRoute?",
        "options": [
          "Hostname, path, headers, query parameters и method в пределах поддерживаемой реализации.",
          "Только UID Pod.",
          "Только размер PVC.",
          "Только CPU node.",
          "Только RBAC role."
        ],
        "answer": 0
      },
      {
        "question": "Что задаёт backendRef HTTPRoute?",
        "options": [
          "Целевой backend Service и порт, а при необходимости вес для traffic split.",
          "CNI tunnel mode.",
          "Имя etcd member.",
          "Права ServiceAccount.",
          "Тип StorageClass."
        ],
        "answer": 0
      },
      {
        "question": "Что означает TLS termination на Gateway?",
        "options": [
          "Gateway принимает TLS, использует сертификат и передаёт расшифрованный HTTP backend.",
          "TLS всегда идёт до Pod без изменений.",
          "Gateway не видит сертификат.",
          "Service создаёт сертификат.",
          "CNI шифрует данные."
        ],
        "answer": 0
      },
      {
        "question": "Чем TLS passthrough отличается от termination?",
        "options": [
          "TLS остаётся до backend, поэтому edge не выполняет обычную HTTP-маршрутизацию содержимого.",
          "Passthrough удаляет SNI.",
          "Termination отключает TLS.",
          "Passthrough создаёт PVC.",
          "между ними нет разницы."
        ],
        "answer": 0
      },
      {
        "question": "Для чего нужен ReferenceGrant?",
        "options": [
          "Позволяет целевому namespace явно разрешить cross-namespace ссылку на свой ресурс.",
          "Открывает любой backend всем namespace.",
          "Заменяет RBAC.",
          "Создаёт GatewayClass.",
          "Назначает Pod node."
        ],
        "answer": 0
      },
      {
        "question": "Почему отсутствие ReferenceGrant не является ошибкой?",
        "options": [
          "Это ожидаемая защита multi-tenancy от ссылки на чужой Service или Secret.",
          "Gateway API не имеет namespace.",
          "Service не поддерживает ports.",
          "Route не использует backend.",
          "TLS не требует Secret."
        ],
        "answer": 0
      },
      {
        "question": "Зачем тестировать rewrite и redirect?",
        "options": [
          "Они меняют URL-контракт клиента, заголовки и возможное поведение cache/cookie.",
          "Они увеличивают PVC.",
          "Они выбирают scheduler.",
          "Они создают DNS.",
          "Они шифруют Secret."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно проверить при TLS-инциденте Gateway?",
        "options": [
          "DNS, SNI, цепочку сертификата, listener status, Route status и backend.",
          "Только число Deployment.",
          "Только ConfigMap.",
          "Только resource quota.",
          "Только CNI version."
        ],
        "answer": 0
      },
      {
        "question": "Почему vendor policy следует выделять отдельно от стандартного Route?",
        "options": [
          "Чтобы явно видеть зависимость от конкретной реализации Gateway controller.",
          "Чтобы Route не работал.",
          "Чтобы удалить Service.",
          "Чтобы не использовать TLS.",
          "Чтобы отключить labels."
        ],
        "answer": 0
      },
      {
        "question": "Какой результат доказывает доступность HTTPRoute?",
        "options": [
          "Успешный клиентский запрос к нужному hostname/path вместе с корректными conditions Route.",
          "Только существование YAML.",
          "Только IP Gateway.",
          "Только Secret в namespace.",
          "Только running Pod controller."
        ],
        "answer": 0
      }
    ]
  },
  "18": {
    "title": "Kubernetes: подробный учебный материал — Gateway API: L4, gRPC и безопасная миграция",
    "questions": [
      {
        "question": "Когда уместен TCPRoute?",
        "options": [
          "Когда нужно направлять непрозрачный TCP-поток без HTTP path/header обработки.",
          "Когда нужно выбрать HTTP method.",
          "Когда нужен PVC snapshot.",
          "Когда выбирается node.",
          "Когда читается Secret."
        ],
        "answer": 0
      },
      {
        "question": "Что позволяет TLSRoute?",
        "options": [
          "Маршрутизацию TLS-потока по SNI без обязательного TLS termination при поддержке реализации.",
          "Дешифровать любой TLS без сертификата.",
          "Выдавать Pod IP.",
          "Создавать RBAC.",
          "Сохранять metrics."
        ],
        "answer": 0
      },
      {
        "question": "Почему GRPCRoute требует проверки HTTP/2 и TLS режима?",
        "options": [
          "gRPC использует HTTP/2, и dataplane должен корректно поддержать выбранный способ передачи.",
          "gRPC не использует сеть.",
          "gRPC всегда UDP.",
          "gRPC заменяет Service.",
          "gRPC создаёт PV."
        ],
        "answer": 0
      },
      {
        "question": "Почему retry на edge может быть опасен?",
        "options": [
          "Повтор неидемпотентного HTTP или RPC действия способен выполнить операцию дважды.",
          "Retry отключает DNS.",
          "Retry удаляет Route.",
          "Retry создаёт CNI IP.",
          "Retry уменьшает Pod CPU."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно собрать до миграции с Ingress?",
        "options": [
          "Hosts, paths, TLS, annotations, auth, timeouts, source IP и поведение backend.",
          "Только UID Ingress.",
          "Только image Pod.",
          "Только StorageClass.",
          "Только число node."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя делить один hostname между двумя dataplane без плана?",
        "options": [
          "DNS, TLS и трафик могут попадать в разные реализации непредсказуемо.",
          "Hostname не используется Gateway.",
          "TLS не зависит от DNS.",
          "Pod не имеет сети.",
          "Service не имеет port."
        ],
        "answer": 0
      },
      {
        "question": "Зачем нужен тестовый hostname при миграции?",
        "options": [
          "Он позволяет проверить Gateway-путь без риска для рабочего пользовательского трафика.",
          "Он удаляет старый Ingress.",
          "Он заменяет certificate.",
          "Он отключает CNI.",
          "Он создаёт etcd snapshot."
        ],
        "answer": 0
      },
      {
        "question": "Что учитывать при DNS cutover?",
        "options": [
          "TTL, кеширование клиентов, connection draining и готовый rollback.",
          "Только имя Pod.",
          "Только размер image.",
          "Только labels Namespace.",
          "Только CPU limit."
        ],
        "answer": 0
      },
      {
        "question": "Почему Gateway controller рассматривают вместе с LoadBalancer и DNS?",
        "options": [
          "Они образуют одну цепочку публикации внешнего маршрута.",
          "Gateway не использует сеть.",
          "LoadBalancer создаёт Pod.",
          "DNS хранит PVC.",
          "Controller заменяет vmauth."
        ],
        "answer": 0
      },
      {
        "question": "Какие сигналы мониторить после миграции?",
        "options": [
          "Route conditions, TLS errors, 4xx/5xx, latency, connection count и пользовательские проверки.",
          "Только Git commits.",
          "Только UID namespace.",
          "Только size ConfigMap.",
          "Только число Secret."
        ],
        "answer": 0
      }
    ]
  },
  "19": {
    "title": "Kubernetes: подробный учебный материал — RBAC, admission и безопасность Kubernetes",
    "questions": [
      {
        "question": "Что проверяет RBAC после аутентификации клиента?",
        "options": [
          "Разрешены ли identity конкретные verb над resource и subresource в нужной области.",
          "RBAC выбирает node для Pod.",
          "RBAC назначает Pod IP.",
          "RBAC монтирует PVC.",
          "RBAC хранит Secret в etcd."
        ],
        "answer": 0
      },
      {
        "question": "Чем Role отличается от ClusterRole?",
        "options": [
          "Role действует в namespace, ClusterRole описывает кластерные или переиспользуемые права.",
          "Role запускает контейнер, ClusterRole хранит данные.",
          "Role только для node, ClusterRole только для Pod.",
          "между ними нет различия.",
          "Role всегда даёт cluster-admin."
        ],
        "answer": 0
      },
      {
        "question": "Что делает RoleBinding?",
        "options": [
          "Назначает Role или ClusterRole субъекту в одном namespace.",
          "Создаёт новый ServiceAccount.",
          "Настраивает Gateway listener.",
          "Выделяет IP Pod.",
          "Создаёт PV."
        ],
        "answer": 0
      },
      {
        "question": "Почему pods/exec и pods/log учитывают отдельно в RBAC?",
        "options": [
          "Это отдельные subresources с чувствительным доступом к процессам и данным Pod.",
          "Они автоматически следуют из get secrets.",
          "Они относятся к StorageClass.",
          "Они не имеют отношения к API.",
          "Они доступны всем пользователям."
        ],
        "answer": 0
      },
      {
        "question": "Что делает validating admission webhook?",
        "options": [
          "Принимает или отклоняет объект до сохранения по заданной политике.",
          "Запускает контейнер на node.",
          "Маршрутизирует HTTP.",
          "Выделяет IPAM адрес.",
          "Создаёт backup etcd."
        ],
        "answer": 0
      },
      {
        "question": "Почему failurePolicy webhook является production-решением?",
        "options": [
          "Недоступный webhook может либо блокировать изменения, либо пропускать контроль безопасности.",
          "Webhook не участвует в API.",
          "Webhook влияет только на README.",
          "Webhook не имеет TLS.",
          "Webhook запускается только вручную."
        ],
        "answer": 0
      },
      {
        "question": "Какой риск даёт privileged Pod?",
        "options": [
          "Он может получить широкий доступ к возможностям node и размыть границу контейнера.",
          "Он не получает сеть.",
          "Он не видит volume.",
          "Он не запускает процессы.",
          "Он только меняет labels."
        ],
        "answer": 0
      },
      {
        "question": "Зачем запускать приложение non-root?",
        "options": [
          "Это уменьшает последствия компрометации процесса внутри контейнера.",
          "Это делает Pod готовым без probe.",
          "Это создаёт Service.",
          "Это заменяет NetworkPolicy.",
          "Это исключает RBAC."
        ],
        "answer": 0
      },
      {
        "question": "Почему образ лучше фиксировать digest?",
        "options": [
          "Digest однозначно связывает deployment с конкретными байтами образа.",
          "Digest автоматически шифрует Secret.",
          "Digest выбирает CNI.",
          "Digest создаёт Pod IP.",
          "Digest заменяет tag registry."
        ],
        "answer": 0
      },
      {
        "question": "Что показывает audit log Kubernetes API?",
        "options": [
          "Кто и каким API-действием обращался к объектам кластера.",
          "Содержимое каждого TCP-пакета.",
          "Историю CPU контейнера.",
          "Данные PVC.",
          "Состояние DNS cache."
        ],
        "answer": 0
      }
    ]
  },
  "20": {
    "title": "Наблюдаемость Kubernetes: метрики, логи, события и alert",
    "questions": [
      {
        "question": "Что показывает условие Ready у Pod?",
        "options": [
          "Pod считается готовым принимать новый трафик по оценке Kubernetes.",
          "Все контейнеры уже скачали образы.",
          "Pod существует в API не менее одной минуты.",
          "Узел, где работает Pod, доступен по SSH.",
          "В namespace нет предупреждающих событий."
        ],
        "answer": 0
      },
      {
        "question": "Чем событие Kubernetes отличается от лога приложения?",
        "options": [
          "Событие описывает действие или состояние объекта Kubernetes, а лог — работу процесса приложения.",
          "Событие хранит только HTTP-тела запросов, а лог — только метрики.",
          "Событие всегда постоянное, а лог всегда удаляется сразу.",
          "События создаёт только пользователь, а логи — только kube-apiserver.",
          "Между ними нет практического различия."
        ],
        "answer": 0
      },
      {
        "question": "Какой сигнал прежде всего помогает понять, почему Pod не назначен на узел?",
        "options": [
          "События Pod с сообщением scheduler о причинах невозможности размещения.",
          "Суммарное число namespace в кластере.",
          "Версия образа в предыдущем Deployment.",
          "Список HTTP-маршрутов Gateway.",
          "Размер файла kubeconfig на рабочей станции."
        ],
        "answer": 0
      },
      {
        "question": "Почему phase Running не доказывает доступность приложения?",
        "options": [
          "Контейнер может быть запущен, но readiness probe ещё не прошла или приложение отвечает ошибкой.",
          "Running означает, что Pod не имеет IP-адреса.",
          "Running бывает только у Job, а не у Deployment.",
          "В этом состоянии Kubernetes удаляет все endpoints Service.",
          "Фаза всегда описывает только версию образа."
        ],
        "answer": 0
      },
      {
        "question": "Какой запрос отвечает на вопрос «сколько Pod реально готовы»?",
        "options": [
          "Проверка условий готовности или метрики готовых реплик, а не простой подсчёт объектов Pod.",
          "Подсчёт всех YAML-файлов в Git-репозитории.",
          "Сумма размеров container image на узлах.",
          "Количество команд kubectl apply за сутки.",
          "Число namespace с меткой production."
        ],
        "answer": 0
      },
      {
        "question": "Зачем связывать логи с namespace, Pod и именем контейнера?",
        "options": [
          "Чтобы из ошибки процесса перейти к конкретному объекту, его событиям и версии workload.",
          "Чтобы уменьшить число реплик Deployment.",
          "Чтобы Service выбирал Pod по этим полям.",
          "Чтобы kubelet мог скачать контейнерный образ.",
          "Чтобы заменить RBAC на поиск по логам."
        ],
        "answer": 0
      },
      {
        "question": "Что должен выражать хороший alert о недоступности сервиса?",
        "options": [
          "Наблюдаемый пользовательский риск и понятное условие срабатывания, а не любое техническое изменение.",
          "Любое появление нового Pod в namespace.",
          "Наличие хотя бы одного информационного события.",
          "Размер манифеста больше заданного числа строк.",
          "Успешное выполнение kubectl apply."
        ],
        "answer": 0
      },
      {
        "question": "Почему alert только по CPU usage может быть недостаточен?",
        "options": [
          "Высокий CPU сам по себе не говорит, что пользовательский сервис недоступен или деградировал.",
          "CPU usage невозможно измерить в Kubernetes.",
          "CPU usage всегда равен requests Pod.",
          "Метрика CPU доступна лишь для control plane.",
          "Она автоматически удаляет Pod."
        ],
        "answer": 0
      },
      {
        "question": "Как правильно использовать SLO при настройке alert?",
        "options": [
          "Связать порог и окно alert с допустимой ошибкой сервиса и скоростью расходования error budget.",
          "Заменить SLO числом replicas в Deployment.",
          "Считать SLO названием namespace.",
          "Включать alert при каждом обновлении Helm chart.",
          "Хранить SLO только в комментарии YAML."
        ],
        "answer": 0
      },
      {
        "question": "С чего начать расследование, если Service не направляет трафик в Pod?",
        "options": [
          "Проверить selector Service, labels Pod и готовые адреса в EndpointSlice.",
          "Сразу перезапустить kube-apiserver.",
          "Удалить все PVC приложения.",
          "Отключить readiness probe у всех Pod.",
          "Выдать пользователю cluster-admin."
        ],
        "answer": 0
      }
    ]
  },
  "21": {
    "title": "Эксплуатация Kubernetes: обновление, drain, HA и rollback",
    "questions": [
      {
        "question": "За что отвечает control plane Kubernetes?",
        "options": [
          "За хранение и согласование желаемого состояния, API, планирование и работу контроллеров.",
          "За выполнение каждого контейнерного процесса вместо kubelet.",
          "Только за маршрутизацию внешнего HTTP-трафика.",
          "Только за хранение логов приложений.",
          "За создание образов контейнеров в CI."
        ],
        "answer": 0
      },
      {
        "question": "Почему etcd требует резервного копирования и проверки восстановления?",
        "options": [
          "В etcd хранится состояние Kubernetes; успешный backup без проверенного restore не доказывает возможность восстановления.",
          "etcd хранит только временные логи kubelet.",
          "etcd можно безопасно удалить после каждого rollout.",
          "etcd нужен только для DNS Service.",
          "etcd автоматически восстанавливает данные из образов контейнеров."
        ],
        "answer": 0
      },
      {
        "question": "Что делает kubectl drain с узлом?",
        "options": [
          "Помечает узел непригодным для нового размещения и выселяет подходящие workload-Pod с учётом ограничений.",
          "Немедленно удаляет namespace узла.",
          "Перезапускает kube-apiserver.",
          "Перемещает данные всех PVC в другой кластер.",
          "Отключает все NetworkPolicy."
        ],
        "answer": 0
      },
      {
        "question": "Почему drain может не завершиться?",
        "options": [
          "PodDisruptionBudget, локальные данные или неподходящие параметры могут запретить или ограничить выселение Pod.",
          "Потому что Deployment нельзя обновлять в Kubernetes.",
          "Потому что Service всегда держит Pod на одном узле.",
          "Потому что labels запрещают удаление node.",
          "Потому что CNI не поддерживает TCP."
        ],
        "answer": 0
      },
      {
        "question": "Чем PodDisruptionBudget отличается от стратегии обновления Deployment?",
        "options": [
          "PDB ограничивает добровольные выселения, а maxSurge и maxUnavailable управляют rollout самого Deployment.",
          "Оба объекта настраивают только Ingress TLS.",
          "PDB создаёт новые Pod, а Deployment хранит логи.",
          "Deployment запрещает любые node maintenance, PDB — нет.",
          "Между ними нет разницы."
        ],
        "answer": 0
      },
      {
        "question": "Какой риск создаёт PDB с minAvailable, равным числу всех реплик?",
        "options": [
          "Плановый drain может заблокироваться, потому что Kubernetes не может выселить ни одну реплику.",
          "Kubernetes автоматически удалит все PVC.",
          "Service потеряет DNS-имя.",
          "etcd перестанет хранить объекты.",
          "Container runtime начнёт использовать другой образ."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно проверить до обновления версии Kubernetes?",
        "options": [
          "Совместимость версий компонентов, аддонов и API, резервную копию etcd, capacity и план rollback.",
          "Только свободное место на ноутбуке оператора.",
          "Только количество YAML-файлов в репозитории.",
          "Только наличие тега latest у образа.",
          "Только текущий IP-адрес Service."
        ],
        "answer": 0
      },
      {
        "question": "Почему обновление worker-узлов выполняют поэтапно?",
        "options": [
          "Чтобы сохранить capacity и доступные реплики, а также ограничить область возможного отказа.",
          "Чтобы каждый Pod получил одинаковый IP-адрес.",
          "Чтобы обойти RBAC для kubelet.",
          "Чтобы убрать все readiness probes.",
          "Чтобы control plane перестал использовать etcd."
        ],
        "answer": 0
      },
      {
        "question": "Почему rollback Deployment не всегда откатывает весь релиз?",
        "options": [
          "Deployment возвращает шаблон Pod, но не обязательно возвращает миграции БД, Secret, ConfigMap и внешние изменения.",
          "Rollback удаляет историю ReplicaSet навсегда.",
          "Rollback гарантированно меняет версию Kubernetes cluster-wide.",
          "Rollback всегда восстанавливает удалённый PVC.",
          "Rollback заменяет резервную копию etcd."
        ],
        "answer": 0
      },
      {
        "question": "Какой результат означает успешное эксплуатационное изменение?",
        "options": [
          "Пользовательский путь работает, нужные conditions достигнуты и наблюдаемость не показывает регрессии.",
          "Команда kubectl завершилась с кодом 0 независимо от состояния объектов.",
          "В Git появился новый коммит.",
          "На узле можно выполнить ping.",
          "Все Pod имеют одинаковый creationTimestamp."
        ],
        "answer": 0
      }
    ]
  },
  "22": {
    "title": "Troubleshooting Kubernetes: путь от симптома к доказательству",
    "questions": [
      {
        "question": "Какой первый шаг при расследовании сбоя Kubernetes-сервиса?",
        "options": [
          "Сформулировать наблюдаемый симптом, его область и время, затем собрать проверяемые факты.",
          "Сразу удалить все Pod workload.",
          "Выдать всем пользователям cluster-admin.",
          "Отключить NetworkPolicy в кластере.",
          "Перезапустить control plane без диагностики."
        ],
        "answer": 0
      },
      {
        "question": "Почему успешный kubectl apply не доказывает готовность Deployment?",
        "options": [
          "API принял декларацию, но контроллеры, scheduler и kubelet ещё могут не создать готовые Pod.",
          "kubectl apply всегда удаляет ReplicaSet.",
          "Deployment не создаёт Pod после apply.",
          "API не хранит Deployment.",
          "Готовность зависит только от локального файла YAML."
        ],
        "answer": 0
      },
      {
        "question": "Что проверить при Pending Pod с сообщением scheduler?",
        "options": [
          "Requests, доступную capacity, taints/tolerations, affinity и конкретное событие планировщика.",
          "Только DNS-имя Service.",
          "Только размер образа контейнера.",
          "Только логи приложения, которого ещё нет.",
          "Только версию kubectl на рабочей станции."
        ],
        "answer": 0
      },
      {
        "question": "Как отличить ImagePullBackOff от ошибки приложения?",
        "options": [
          "По состоянию контейнера и событиям: ошибка возникает до запуска процесса приложения.",
          "ImagePullBackOff означает, что приложение вернуло HTTP 500.",
          "Это состояние создаётся Service selector-ом.",
          "Оно появляется только после успешной readiness probe.",
          "Оно показывает нехватку PVC."
        ],
        "answer": 0
      },
      {
        "question": "Что означает отсутствие адресов в EndpointSlice Service?",
        "options": [
          "Service не нашёл подходящих готовых Pod либо адреса ещё не опубликованы контроллером.",
          "Service автоматически удалил namespace.",
          "Все Pod обязательно работают на одном узле.",
          "Ingress controller перестал читать TLS Secret.",
          "etcd потерял резервную копию."
        ],
        "answer": 0
      },
      {
        "question": "Какой порядок проверки разумен при 502 от Gateway?",
        "options": [
          "Проверить маршрут и backend reference, Service, EndpointSlice, readiness Pod и затем логи прокси.",
          "Сразу изменить версию Kubernetes.",
          "Удалить все HTTPRoute.",
          "Выключить TLS на Gateway.",
          "Пересоздать etcd cluster."
        ],
        "answer": 0
      },
      {
        "question": "Почему пустой результат команды kubectl get не всегда означает, что объекта не существует?",
        "options": [
          "Можно смотреть другой namespace, cluster context или не иметь права list для нужного ресурса.",
          "Kubernetes никогда не хранит пустые списки.",
          "Пустой вывод автоматически означает отказ CNI.",
          "kubectl не умеет выбирать namespace.",
          "Все объекты должны быть cluster-scoped."
        ],
        "answer": 0
      },
      {
        "question": "Чем полезна проверка generation и observedGeneration?",
        "options": [
          "Она показывает, обработал ли контроллер именно последнюю версию spec, а не просто существует ли объект.",
          "Она измеряет размер Docker image.",
          "Она заменяет audit log API server.",
          "Она определяет IP-адрес Pod.",
          "Она применяется только к ConfigMap."
        ],
        "answer": 0
      },
      {
        "question": "Почему нельзя лечить 403 от Kubernetes API выдачей cluster-admin?",
        "options": [
          "403 требует проверки identity, verb, resource и scope; избыточные права маскируют ошибку и повышают риск.",
          "403 всегда означает сетевую ошибку CNI.",
          "cluster-admin не даёт доступ к API.",
          "RBAC не влияет на запросы kubectl.",
          "403 исправляется только рестартом kubelet."
        ],
        "answer": 0
      },
      {
        "question": "Что должно быть результатом завершённого инцидента?",
        "options": [
          "Подтверждённая причина, восстановленный пользовательский путь, зафиксированные факты и меры против повторения.",
          "Только удалённый Pod с ошибкой.",
          "Только новая версия Helm chart.",
          "Скриншот одной команды kubectl get.",
          "Отключённый alert без объяснения."
        ],
        "answer": 0
      }
    ]
  },
  "23": {
    "title": "Поставка в Kubernetes: GitOps, Helm, secrets и rollback",
    "questions": [
      {
        "question": "Что означает декларативный источник истины для Kubernetes?",
        "options": [
          "Желаемое состояние хранится в проверяемой конфигурации, а контроллер приводит кластер к нему.",
          "Все изменения делаются только kubectl edit в production.",
          "Kubernetes сам придумывает конфигурацию приложения.",
          "В Git хранятся только логи Pod.",
          "Источник истины — последний IP-адрес Pod."
        ],
        "answer": 0
      },
      {
        "question": "Зачем GitOps-контроллер регулярно сравнивает Git и кластер?",
        "options": [
          "Чтобы обнаруживать drift и возвращать фактическое состояние к согласованной декларации.",
          "Чтобы автоматически удалять все Secret.",
          "Чтобы kubelet скачивал образы без registry.",
          "Чтобы выключить RBAC.",
          "Чтобы назначить всем Pod одну node."
        ],
        "answer": 0
      },
      {
        "question": "Какую роль выполняет Helm chart?",
        "options": [
          "Шаблонизирует и упаковывает связанные Kubernetes-ресурсы с параметрами установки.",
          "Заменяет API server и etcd.",
          "Является контейнерным runtime.",
          "Создаёт CNI-сеть между кластерами.",
          "Хранит runtime-логи приложений."
        ],
        "answer": 0
      },
      {
        "question": "Почему values Helm не следует считать защищённым хранилищем секретов?",
        "options": [
          "Секретное значение может попасть в Git, историю release или вывод инструментов; нужен управляемый способ доставки secrets.",
          "Helm не умеет создавать ConfigMap.",
          "Values всегда зашифрованы Kubernetes по умолчанию.",
          "Helm values доступны только kubelet.",
          "Secret нельзя использовать в Pod."
        ],
        "answer": 0
      },
      {
        "question": "Что нужно проверить перед promotion артефакта в production?",
        "options": [
          "Неизменяемый образ или digest, результаты проверок, совместимость конфигурации и план отката.",
          "Только название Git branch.",
          "Только число комментариев в chart.",
          "Только свободное место в etcd.",
          "Только возраст namespace."
        ],
        "answer": 0
      },
      {
        "question": "Почему ручное изменение ресурса может исчезнуть после GitOps sync?",
        "options": [
          "Контроллер видит расхождение с декларацией и восстанавливает описанное в Git состояние.",
          "Kubernetes не хранит ручные изменения.",
          "Service автоматически пересоздаёт Deployment.",
          "CNI удаляет все labels.",
          "Helm запрещает kubectl commands."
        ],
        "answer": 0
      },
      {
        "question": "Что необходимо включить в план rollback релиза с миграцией базы данных?",
        "options": [
          "Проверку обратимости схемы и данных: откат шаблона Pod сам по себе миграцию не отменяет.",
          "Только удаление ReplicaSet.",
          "Только изменение Service type.",
          "Только рестарт node.",
          "Только создание нового namespace."
        ],
        "answer": 0
      },
      {
        "question": "Почему provenance образа важна для поставки?",
        "options": [
          "Она связывает развернутый digest с проверенной сборкой, исходным кодом и результатами CI.",
          "Она выдаёт Pod постоянный IP.",
          "Она заменяет NetworkPolicy.",
          "Она увеличивает число replicas.",
          "Она отключает admission policy."
        ],
        "answer": 0
      },
      {
        "question": "Как безопаснее передавать конфигурацию, различающуюся между окружениями?",
        "options": [
          "Явно разделять параметры окружений и проверять итоговые манифесты до применения.",
          "Копировать production Secret в тестовый namespace.",
          "Использовать тег latest для каждого окружения.",
          "Править уже работающие Pod вручную.",
          "Отключить server-side validation."
        ],
        "answer": 0
      },
      {
        "question": "Какой признак подтверждает успешную поставку?",
        "options": [
          "Ожидаемая версия работает по пользовательскому пути, conditions в норме и наблюдаемость не показывает регрессию.",
          "Helm command завершилась без проверки кластера.",
          "В Git создан новый tag.",
          "В namespace существует хотя бы один Pod.",
          "kubectl показывает любой Service."
        ],
        "answer": 0
      }
    ]
  },
  "24": {
    "title": "Итоговая архитектура Kubernetes-платформы",
    "questions": [
      {
        "question": "Почему Service должен быть границей доступа к репликам приложения?",
        "options": [
          "Он даёт устойчивое DNS-имя и выбирает готовые Pod, IP которых могут меняться.",
          "Он закрепляет Pod на одной node.",
          "Он хранит контейнерные образы.",
          "Он заменяет liveness probe.",
          "Он автоматически создаёт PVC."
        ],
        "answer": 0
      },
      {
        "question": "Какой принцип уменьшает риск прав доступа в Kubernetes?",
        "options": [
          "Выдавать identity только минимально необходимые verbs, resources и scope по принципу least privilege.",
          "Выдавать cluster-admin каждому ServiceAccount.",
          "Использовать один общий kubeconfig для всех команд.",
          "Отключить audit log.",
          "Хранить токены в ConfigMap."
        ],
        "answer": 0
      },
      {
        "question": "Почему requests важны для надёжности workload?",
        "options": [
          "Scheduler использует их для размещения, а платформа получает предсказуемую reservation ресурсов.",
          "Requests гарантируют, что приложение никогда не упадёт.",
          "Requests заменяют limits и probes.",
          "Requests задают DNS Service.",
          "Requests запрещают обновление Deployment."
        ],
        "answer": 0
      },
      {
        "question": "Какой риск создаёт отсутствие resource limits там, где они необходимы?",
        "options": [
          "Один процесс может потреблять чрезмерные ресурсы узла и ухудшать работу соседних workload.",
          "Pod обязательно получит постоянный IP.",
          "Service перестанет выбирать labels.",
          "etcd перестанет принимать API-объекты.",
          "Ingress станет TCPRoute."
        ],
        "answer": 0
      },
      {
        "question": "Как разделять ответственность между приложением и платформой?",
        "options": [
          "Платформа обеспечивает безопасные стандартные границы, а приложение определяет корректность своей логики, probes и данных.",
          "Платформа должна автоматически исправлять любой бизнес-код.",
          "Приложение должно управлять etcd напрямую.",
          "Никто не отвечает за мониторинг.",
          "Все команды должны использовать один namespace."
        ],
        "answer": 0
      },
      {
        "question": "Что означает отказоустойчивость по failure domains?",
        "options": [
          "Реплики и критичные компоненты распределены так, чтобы один отказ домена не остановил сервис целиком.",
          "Все Pod запускаются на одном самом мощном узле.",
          "Каждый контейнер получает отдельный кластер.",
          "Service создаёт вторую копию etcd.",
          "Ingress отключает DNS."
        ],
        "answer": 0
      },
      {
        "question": "Почему NetworkPolicy не является полной моделью безопасности?",
        "options": [
          "Она регулирует сетевые потоки, но не заменяет RBAC, admission, безопасность образов и управление secrets.",
          "Она автоматически шифрует все диски.",
          "Она хранит резервные копии etcd.",
          "Она выдаёт TLS-сертификаты.",
          "Она заменяет ServiceAccount."
        ],
        "answer": 0
      },
      {
        "question": "Какая проверка важна при приёмке новой платформенной функции?",
        "options": [
          "Проверить ожидаемый пользовательский путь, отказной сценарий, наблюдаемость и обратимость изменения.",
          "Проверить только, что YAML синтаксически верен.",
          "Проверить только версию kubectl.",
          "Удалить старые alerts перед тестом.",
          "Проверить количество комментариев в Git."
        ],
        "answer": 0
      },
      {
        "question": "Зачем фиксировать архитектурные решения и их ограничения?",
        "options": [
          "Чтобы следующий инженер понимал контекст, границы применимости и последствия изменения решения.",
          "Чтобы Kubernetes быстрее запускал контейнеры.",
          "Чтобы скрыть Secrets в Git history.",
          "Чтобы заменить runbook списком labels.",
          "Чтобы не проводить review изменений."
        ],
        "answer": 0
      },
      {
        "question": "Какой итоговый критерий зрелой Kubernetes-платформы?",
        "options": [
          "Изменения воспроизводимы, безопасно наблюдаемы, имеют владельцев и проверяемый путь восстановления.",
          "В кластере используется максимальное число CRD.",
          "Все приложения имеют один Docker image.",
          "Нет ни одного события Kubernetes.",
          "Каждый Pod работает без Service."
        ],
        "answer": 0
      }
    ]
  }
};
