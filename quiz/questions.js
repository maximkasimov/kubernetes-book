window.QUIZ_DATA = {
  "01": {
    "title": "Kubernetes: архитектура и модель управления",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Что Kubernetes решает, а что оставляет вам»?",
        "options": [
          "Labels — основной механизм группировки и выбора объектов.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O.",
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок.",
          "Namespace — логическая область имён и удобная граница для RBAC, quotas, NetworkPolicy и владения."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Что Kubernetes решает, а что оставляет вам — дополнительный аспект»?",
        "options": [
          "Namespace — логическая область имён и удобная граница для RBAC, quotas, NetworkPolicy и владения.",
          "Главная мысль для инженера: объект YAML — не команда, которую Kubernetes исполняет один раз.",
          "Если manifest описывает Deployment, Deployment controller создаёт или обновляет ReplicaSet; ReplicaSet controller создаёт Pod.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Control plane: единственный источник истины API»?",
        "options": [
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения.",
          "etcd хранит состояние Kubernetes как распределённое key-value-хранилище.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Control plane: единственный источник истины API — дополнительный аспект»?",
        "options": [
          "etcd хранит состояние Kubernetes как распределённое key-value-хранилище.",
          "Главная мысль для инженера: объект YAML — не команда, которую Kubernetes исполняет один раз.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O.",
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Node: где декларация становится работающим процессом»?",
        "options": [
          "Если manifest описывает Deployment, Deployment controller создаёт или обновляет ReplicaSet; ReplicaSet controller создаёт Pod.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения.",
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок.",
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Node: где декларация становится работающим процессом — дополнительный аспект»?",
        "options": [
          "Namespace — логическая область имён и удобная граница для RBAC, quotas, NetworkPolicy и владения.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O.",
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок.",
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Путь одного manifest от kubectl к Pod»?",
        "options": [
          "etcd хранит состояние Kubernetes как распределённое key-value-хранилище.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами.",
          "Главная мысль для инженера: объект YAML — не команда, которую Kubernetes исполняет один раз.",
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок.",
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Путь одного manifest от kubectl к Pod — дополнительный аспект»?",
        "options": [
          "Главная мысль для инженера: объект YAML — не команда, которую Kubernetes исполняет один раз.",
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения.",
          "Если manifest описывает Deployment, Deployment controller создаёт или обновляет ReplicaSet; ReplicaSet controller создаёт Pod.",
          "Kubernetes — это система управления желаемым состоянием распределённых контейнерных нагрузок."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Namespace, labels и selectors как контракт платформы»?",
        "options": [
          "Когда вы выполняете kubectl apply, клиент отправляет manifest в kube-apiserver.",
          "Container runtime реализует CRI и запускает контейнеры; в типичных кластерах используют containerd или CRI-O.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения.",
          "Namespace — логическая область имён и удобная граница для RBAC, quotas, NetworkPolicy и владения."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Namespace, labels и selectors как контракт платформы — дополнительный аспект»?",
        "options": [
          "Labels — основной механизм группировки и выбора объектов.",
          "Control plane принимает декларации, хранит состояние и принимает глобальные решения.",
          "На каждом node kubelet наблюдает API server и приводит локальное состояние к PodSpec: получает образ через container runtime, создаёт sandbox Pod, вызывает CNI, монтирует volumes и следит за контейнерами.",
          "Если manifest описывает Deployment, Deployment controller создаёт или обновляет ReplicaSet; ReplicaSet controller создаёт Pod.",
          "Namespace — логическая область имён и удобная граница для RBAC, quotas, NetworkPolicy и владения."
        ],
        "answer": 0
      }
    ]
  },
  "02": {
    "title": "Kubernetes: подробный учебный материал — API-объекты, YAML и kubectl: как декларация меняет кластер",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Kubernetes API как контракт»?",
        "options": [
          "Удаление устанавливает deletionTimestamp.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Kubernetes API как контракт — дополнительный аспект»?",
        "options": [
          "Удаление устанавливает deletionTimestamp.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «YAML, labels и annotations»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «YAML, labels и annotations — дополнительный аспект»?",
        "options": [
          "Удаление устанавливает deletionTimestamp.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Операции kubectl»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Операции kubectl — дополнительный аспект»?",
        "options": [
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Удаление устанавливает deletionTimestamp.",
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Удаление и finalizers»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Удаление устанавливает deletionTimestamp."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Удаление и finalizers — дополнительный аспект»?",
        "options": [
          "Удаление устанавливает deletionTimestamp.",
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions.",
          "YAML чувствителен к отступам и типам: строка, число и boolean не взаимозаменяемы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Процесс изменения»?",
        "options": [
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Процесс изменения — дополнительный аспект»?",
        "options": [
          "kubectl — только один из клиентов API наряду с GitOps-контроллером, оператором и CI.",
          "Удаление устанавливает deletionTimestamp.",
          "create создаёт объект и конфликтует с уже существующим; replace отправляет полное представление и может затереть чужие поля; patch меняет часть объекта.",
          "Храните декларации в Git, проверяйте серверной схемой, смотрите diff, применяйте от контролируемой identity и ожидайте conditions.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "03": {
    "title": "Kubernetes: подробный учебный материал — Pod и жизненный цикл контейнеров: минимальная единица размещения",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Pod и общая среда»?",
        "options": [
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod — единица планирования: его контейнеры находятся на одной node, разделяют IP-адрес, network namespace и при необходимости volumes."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Pod и общая среда — дополнительный аспект»?",
        "options": [
          "Pod — единица планирования: его контейнеры находятся на одной node, разделяют IP-адрес, network namespace и при необходимости volumes.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «От назначения к процессу»?",
        "options": [
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «От назначения к процессу — дополнительный аспект»?",
        "options": [
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "Pod — единица планирования: его контейнеры находятся на одной node, разделяют IP-адрес, network namespace и при необходимости volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Фазы и состояния»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Фазы и состояния — дополнительный аспект»?",
        "options": [
          "Pod — единица планирования: его контейнеры находятся на одной node, разделяют IP-адрес, network namespace и при необходимости volumes.",
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Пробы»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка.",
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Пробы — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL.",
          "Pod — единица планирования: его контейнеры находятся на одной node, разделяют IP-адрес, network namespace и при необходимости volumes.",
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Завершение и диагностика»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Завершение и диагностика — дополнительный аспект»?",
        "options": [
          "startupProbe защищает медленный старт; до её успеха liveness/readiness не выполняются обычным образом.",
          "Pod phase Pending, Running, Succeeded, Failed или Unknown — грубая сводка.",
          "Scheduler выбирает node, kubelet получает назначение, создаёт sandbox через CRI, CNI подключает сеть, runtime загружает образы и монтируются volumes.",
          "При удалении kubelet выполняет preStop, посылает SIGTERM и ждёт terminationGracePeriodSeconds, затем использует SIGKILL.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "04": {
    "title": "Kubernetes: подробный учебный материал — Контроллеры рабочих нагрузок: Deployment, StatefulSet, DaemonSet и Job",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Контроллер и согласование»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Deployment управляет ReplicaSet, а тот — Pods.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Контроллер и согласование — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node.",
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Deployment управляет ReplicaSet, а тот — Pods."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Deployment и ReplicaSet»?",
        "options": [
          "Deployment управляет ReplicaSet, а тот — Pods.",
          "Одиночный Pod не восстанавливается после удаления или отказа node.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Deployment и ReplicaSet — дополнительный аспект»?",
        "options": [
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "RollingUpdate — компромисс скорости и доступности.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Одиночный Pod не восстанавливается после удаления или отказа node."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «StatefulSet»?",
        "options": [
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «StatefulSet — дополнительный аспект»?",
        "options": [
          "RollingUpdate — компромисс скорости и доступности.",
          "Deployment управляет ReplicaSet, а тот — Pods.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DaemonSet, Job, CronJob»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node.",
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DaemonSet, Job, CronJob — дополнительный аспект»?",
        "options": [
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "RollingUpdate — компромисс скорости и доступности.",
          "Deployment управляет ReplicaSet, а тот — Pods.",
          "Одиночный Pod не восстанавливается после удаления или отказа node."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Стратегия релиза»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "RollingUpdate — компромисс скорости и доступности.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "DaemonSet поддерживает Pod на каждой подходящей node: CNI, логи, мониторинг."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Стратегия релиза — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Одиночный Pod не восстанавливается после удаления или отказа node.",
          "StatefulSet даёт ordinal-имена db-0, db-1, стабильное DNS через headless Service и отдельный PVC из volumeClaimTemplates.",
          "RollingUpdate — компромисс скорости и доступности.",
          "Deployment управляет ReplicaSet, а тот — Pods."
        ],
        "answer": 0
      }
    ]
  },
  "05": {
    "title": "Kubernetes: подробный учебный материал — Конфигурация, задания и секреты: границы между кодом, данными и доступом",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «ConfigMap и Secret»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Конфигурация может попасть через environment, args или смонтированный файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «ConfigMap и Secret — дополнительный аспект»?",
        "options": [
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace.",
          "Job определяет completions, parallelism, backoffLimit и activeDeadlineSeconds."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Доставка конфигурации»?",
        "options": [
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Доставка конфигурации — дополнительный аспект»?",
        "options": [
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Job определяет completions, parallelism, backoffLimit и activeDeadlineSeconds.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Job»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Job определяет completions, parallelism, backoffLimit и activeDeadlineSeconds.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace.",
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Job — дополнительный аспект»?",
        "options": [
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace.",
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CronJob и время»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CronJob и время — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "Job определяет completions, parallelism, backoffLimit и activeDeadlineSeconds.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Внешние секреты и ротация»?",
        "options": [
          "ConfigMap хранит неконфиденциальную конфигурацию, Secret — чувствительные данные.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Внешние секреты и ротация — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Vault, облачный secret manager или иной внешний источник сокращает распространение постоянных ключей, но добавляет зависимости: identity, сеть, ротация и поведение при недоступности.",
          "Конфигурация может попасть через environment, args или смонтированный файл.",
          "Job определяет completions, parallelism, backoffLimit и activeDeadlineSeconds.",
          "startingDeadlineSeconds определяет допустимое опоздание, concurrencyPolicy выбирает Allow, Forbid или Replace."
        ],
        "answer": 0
      }
    ]
  },
  "06": {
    "title": "Kubernetes: подробный учебный материал — Планирование и ресурсы: как Kubernetes выбирает node и защищает кластер",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Решение scheduler»?",
        "options": [
          "Для нестабильного Pod проверяйте pressure node, throttling, OOM и eviction.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Решение scheduler — дополнительный аспект»?",
        "options": [
          "Taint отталкивает Pod без toleration.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup.",
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CPU, память и QoS»?",
        "options": [
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CPU, память и QoS — дополнительный аспект»?",
        "options": [
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Taint отталкивает Pod без toleration.",
          "Для нестабильного Pod проверяйте pressure node, throttling, OOM и eviction.",
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Taints и affinity»?",
        "options": [
          "Taint отталкивает Pod без toleration.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Taints и affinity — дополнительный аспект»?",
        "options": [
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Taint отталкивает Pod без toleration.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Quota и priority»?",
        "options": [
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Quota и priority — дополнительный аспект»?",
        "options": [
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Taint отталкивает Pod без toleration.",
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Для нестабильного Pod проверяйте pressure node, throttling, OOM и eviction."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Capacity и autoscaling»?",
        "options": [
          "Для нестабильного Pod проверяйте pressure node, throttling, OOM и eviction.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Capacity и autoscaling — дополнительный аспект»?",
        "options": [
          "CPU request участвует в размещении и распределении времени, limit ограничивает cgroup.",
          "Scheduler фильтрует nodes по requests и allocatable, nodeSelector/affinity, taints/tolerations, volumes и topology rules, затем оценивает подходящие варианты.",
          "Для нестабильного Pod проверяйте pressure node, throttling, OOM и eviction.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "ResourceQuota ограничивает сумму ресурсов и объектов namespace; LimitRange задаёт defaults/min/max."
        ],
        "answer": 3
      }
    ]
  },
  "07": {
    "title": "Kubernetes: подробный учебный материал — Хранилище Kubernetes: PV, PVC, StorageClass, CSI и резервное копирование",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «PV, PVC и StorageClass»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "PV описывает ресурс хранения, PVC — запрос workload, StorageClass — политику выделения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «PV, PVC и StorageClass — дополнительный аспект»?",
        "options": [
          "PV описывает ресурс хранения, PVC — запрос workload, StorageClass — политику выделения.",
          "CSI controller обычно выполняет provision/attach, node plugin — mount на node.",
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Binding и topology»?",
        "options": [
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Snapshot инфраструктуры не равен согласованной копии базы.",
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Binding и topology — дополнительный аспект»?",
        "options": [
          "Snapshot инфраструктуры не равен согласованной копии базы.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "PV описывает ресурс хранения, PVC — запрос workload, StorageClass — политику выделения.",
          "StatefulSet создаёт отдельный PVC на ordinal."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CSI»?",
        "options": [
          "CSI controller обычно выполняет provision/attach, node plugin — mount на node.",
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "PV описывает ресурс хранения, PVC — запрос workload, StorageClass — политику выделения."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CSI — дополнительный аспект»?",
        "options": [
          "CSI controller обычно выполняет provision/attach, node plugin — mount на node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Snapshot инфраструктуры не равен согласованной копии базы.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "StatefulSet создаёт отдельный PVC на ordinal."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Stateful workload»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Stateful workload — дополнительный аспект»?",
        "options": [
          "CSI controller обычно выполняет provision/attach, node plugin — mount на node.",
          "PV описывает ресурс хранения, PVC — запрос workload, StorageClass — политику выделения.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Snapshot инфраструктуры не равен согласованной копии базы."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Backup и restore»?",
        "options": [
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Snapshot инфраструктуры не равен согласованной копии базы.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Backup и restore — дополнительный аспект»?",
        "options": [
          "Snapshot инфраструктуры не равен согласованной копии базы.",
          "StatefulSet создаёт отдельный PVC на ordinal.",
          "CSI controller обычно выполняет provision/attach, node plugin — mount на node.",
          "PVC Pending означает, что provisioner/кластер ещё не выделил совместимый PV.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "08": {
    "title": "Kubernetes: подробный учебный материал — Сетевая модель Kubernetes: адресация, DNS и путь пакета",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Сетевой контракт»?",
        "options": [
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "На одной node пакет проходит veth и dataplane плагина.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Сетевой контракт — дополнительный аспект»?",
        "options": [
          "Service даёт стабильный виртуальный адрес и selector либо вручную созданные EndpointSlice.",
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Оверлей тратит MTU на заголовки."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Путь Pod-to-Pod»?",
        "options": [
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "На одной node пакет проходит veth и dataplane плагина."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Путь Pod-to-Pod — дополнительный аспект»?",
        "options": [
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "На одной node пакет проходит veth и dataplane плагина.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Service даёт стабильный виртуальный адрес и selector либо вручную созданные EndpointSlice.",
          "Оверлей тратит MTU на заголовки."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Service и EndpointSlice»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Service даёт стабильный виртуальный адрес и selector либо вручную созданные EndpointSlice.",
          "На одной node пакет проходит veth и dataplane плагина.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Service и EndpointSlice — дополнительный аспект»?",
        "options": [
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "На одной node пакет проходит veth и dataplane плагина.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "Оверлей тратит MTU на заголовки."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DNS»?",
        "options": [
          "На одной node пакет проходит veth и dataplane плагина.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "Service даёт стабильный виртуальный адрес и selector либо вручную созданные EndpointSlice."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DNS — дополнительный аспект»?",
        "options": [
          "Оверлей тратит MTU на заголовки.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "Service даёт стабильный виртуальный адрес и selector либо вручную созданные EndpointSlice.",
          "На одной node пакет проходит veth и dataplane плагина."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «MTU и диагностика»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod.",
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "Оверлей тратит MTU на заголовки."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «MTU и диагностика — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "На одной node пакет проходит veth и dataplane плагина.",
          "Оверлей тратит MTU на заголовки.",
          "Kubernetes ожидает связность Pod-to-Pod без NAT в базовой модели, доступ node к Pod и Pod к node.",
          "CoreDNS отвечает за service.namespace.svc.cluster-domain; короткое имя зависит от search domains Pod."
        ],
        "answer": 0
      }
    ]
  },
  "09": {
    "title": "Kubernetes: подробный учебный материал — CNI: контракт, IPAM и подключение Pod к сети",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «CNI в жизненном цикле Pod»?",
        "options": [
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано.",
          "Начните с Events Pod и status контейнера.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «CNI в жизненном цикле Pod — дополнительный аспект»?",
        "options": [
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Что получает и возвращает плагин»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Что получает и возвращает плагин — дополнительный аспект»?",
        "options": [
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано.",
          "Начните с Events Pod и status контейнера.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «IPAM и адресный план»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «IPAM и адресный план — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "CNI вызывается для ADD при создании, DEL при удалении и CHECK, если это поддержано."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «veth и network namespace»?",
        "options": [
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «veth и network namespace — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "Начните с Events Pod и status контейнера.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Диагностика подключения»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Начните с Events Pod и status контейнера.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Диагностика подключения — дополнительный аспект»?",
        "options": [
          "Обычно CNI создаёт veth-пару: один конец находится в namespace Pod как eth0, другой — на node и подключён к bridge, маршруту или eBPF dataplane.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Начните с Events Pod и status контейнера.",
          "IP Address Management (IPAM) выделяет Pod адрес из диапазона.",
          "Container Network Interface (CNI) — спецификация и набор плагинов, через которые runtime/kubelet подключает sandbox Pod к сети."
        ],
        "answer": 1
      }
    ]
  },
  "10": {
    "title": "Kubernetes: подробный учебный материал — CNI: маршрутизация, overlay и underlay",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Три модели передачи»?",
        "options": [
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Три модели передачи — дополнительный аспект»?",
        "options": [
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования.",
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Overlay подробно»?",
        "options": [
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Overlay подробно — дополнительный аспект»?",
        "options": [
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Маршрутизация без overlay»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Маршрутизация без overlay — дополнительный аспект»?",
        "options": [
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «MTU как свойство полного пути»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования."
        ],
        "answer": 4
      },
      {
        "question": "Какое утверждение точнее всего характеризует «MTU как свойство полного пути — дополнительный аспект»?",
        "options": [
          "VXLAN, Geneve и подобные протоколы добавляют внешний заголовок: внешний source/destination — nodes, внутренний пакет сохраняет адреса Pods.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Source NAT и обратный путь»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Source NAT и обратный путь — дополнительный аспект»?",
        "options": [
          "Для трафика Pod наружу часто применяется masquerade/SNAT, чтобы внешний мир возвращал пакеты на node/gateway.",
          "В нативной L3-модели сеть nodes знает маршруты к Pod CIDR каждой node.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "При direct routing CNI устанавливает маршруты к Pod CIDR через next-hop node либо публикует маршруты BGP.",
          "Правильный MTU — минимум допустимого размера по всему пути минус накладные расходы туннеля/шифрования."
        ],
        "answer": 2
      }
    ]
  },
  "11": {
    "title": "Kubernetes: подробный учебный материал — eBPF и Cilium: современный dataplane Kubernetes",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Что меняет eBPF»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "eBPF — механизм ядра Linux для безопасно загружаемых программ, выполняемых в определённых точках обработки пакета, сокетов и событий.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Что меняет eBPF — дополнительный аспект»?",
        "options": [
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "eBPF — механизм ядра Linux для безопасно загружаемых программ, выполняемых в определённых точках обработки пакета, сокетов и событий.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Cilium может сопоставлять endpoint с security identity, построенной по labels, и применять policy на основе этой идентичности."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Service без традиционного kube-proxy»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "eBPF — механизм ядра Linux для безопасно загружаемых программ, выполняемых в определённых точках обработки пакета, сокетов и событий.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 1
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Service без традиционного kube-proxy — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм.",
          "Cilium может сопоставлять endpoint с security identity, построенной по labels, и применять policy на основе этой идентичности.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Identity-based policy»?",
        "options": [
          "Cilium может сопоставлять endpoint с security identity, построенной по labels, и применять policy на основе этой идентичности.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Identity-based policy — дополнительный аспект»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Cilium может сопоставлять endpoint с security identity, построенной по labels, и применять policy на основе этой идентичности.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Hubble и наблюдаемость»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "eBPF — механизм ядра Linux для безопасно загружаемых программ, выполняемых в определённых точках обработки пакета, сокетов и событий.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Hubble и наблюдаемость — дополнительный аспект»?",
        "options": [
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "eBPF — механизм ядра Linux для безопасно загружаемых программ, выполняемых в определённых точках обработки пакета, сокетов и событий.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «L7 policy и прокси»?",
        "options": [
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «L7 policy и прокси — дополнительный аспект»?",
        "options": [
          "Для HTTP, gRPC, Kafka и других протоколов Cilium может применять L7-правила через proxy-механизм.",
          "Hubble использует данные Cilium/eBPF для наблюдения сетевых flows: source/destination identity, verdict, L3/L4 и в некоторых режимах L7-контекст.",
          "В режиме kube-proxy replacement Cilium может реализовать Service translation и выбор backend через eBPF вместо iptables/ipvs kube-proxy.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Cilium может сопоставлять endpoint с security identity, построенной по labels, и применять policy на основе этой идентичности."
        ],
        "answer": 3
      }
    ]
  },
  "12": {
    "title": "Kubernetes: подробный учебный материал — Calico и NetworkPolicy: изоляция и управляемое разрешение трафика",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Calico как CNI и policy engine»?",
        "options": [
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Calico как CNI и policy engine — дополнительный аспект»?",
        "options": [
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "Инвентаризируйте реальные потоки, начните с наблюдаемого namespace, добавьте разрешение DNS и критичных зависимостей, включите default deny только после проверки.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Семантика Kubernetes NetworkPolicy»?",
        "options": [
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Семантика Kubernetes NetworkPolicy — дополнительный аспект»?",
        "options": [
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "Инвентаризируйте реальные потоки, начните с наблюдаемого namespace, добавьте разрешение DNS и критичных зависимостей, включите default deny только после проверки.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Selectors и пересечение правил»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Selectors и пересечение правил — дополнительный аспект»?",
        "options": [
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods.",
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DNS и egress»?",
        "options": [
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR."
        ],
        "answer": 2
      },
      {
        "question": "Какое утверждение точнее всего характеризует «DNS и egress — дополнительный аспект»?",
        "options": [
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "Инвентаризируйте реальные потоки, начните с наблюдаемого namespace, добавьте разрешение DNS и критичных зависимостей, включите default deny только после проверки.",
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods."
        ],
        "answer": 3
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Порядок внедрения»?",
        "options": [
          "Инвентаризируйте реальные потоки, начните с наблюдаемого namespace, добавьте разрешение DNS и критичных зависимостей, включите default deny только после проверки.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 0
      },
      {
        "question": "Какое утверждение точнее всего характеризует «Порядок внедрения — дополнительный аспект»?",
        "options": [
          "Default deny egress без исключения для DNS ломает резолвинг, часто проявляясь как ошибки приложений.",
          "NetworkPolicy выбирает Pods по podSelector и разрешает ingress/egress для выбранных Pods.",
          "Calico может давать CNI-подключение, маршрутизацию через BGP или overlay и применять policy.",
          "podSelector выбирает источник/получатель внутри namespace; namespaceSelector расширяет область; ipBlock описывает CIDR.",
          "Изучайте ресурс через Kubernetes API, а не как отдельный YAML-файл."
        ],
        "answer": 4
      }
    ]
  },
  "13": {
    "title": "Kubernetes: подробный учебный материал — Service и внутренний доступ: стабильная точка для Pod",
    "questions": [
      {
        "question": "Какое утверждение точнее всего характеризует «Почему не Pod IP»?",
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
        "question": "Какое утверждение точнее всего характеризует «Почему не Pod IP — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Типы Service»?",
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
        "question": "Какое утверждение точнее всего характеризует «Типы Service — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Порты и именование»?",
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
        "question": "Какое утверждение точнее всего характеризует «Порты и именование — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «EndpointSlice и готовность»?",
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
        "question": "Какое утверждение точнее всего характеризует «EndpointSlice и готовность — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Session и source IP»?",
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
        "question": "Какое утверждение точнее всего характеризует «Session и source IP — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Граница и модель угроз»?",
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
        "question": "Какое утверждение точнее всего характеризует «Граница и модель угроз — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Default deny»?",
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
        "question": "Какое утверждение точнее всего характеризует «Default deny — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Идентификация зависимостей»?",
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
        "question": "Какое утверждение точнее всего характеризует «Идентификация зависимостей — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Проверка эффекта»?",
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
        "question": "Какое утверждение точнее всего характеризует «Проверка эффекта — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Инциденты и откат»?",
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
        "question": "Какое утверждение точнее всего характеризует «Инциденты и откат — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Ingress и Ingress Controller»?",
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
        "question": "Какое утверждение точнее всего характеризует «Ingress и Ingress Controller — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Путь запроса»?",
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
        "question": "Какое утверждение точнее всего характеризует «Путь запроса — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «TLS»?",
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
        "question": "Какое утверждение точнее всего характеризует «TLS — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Ограничения API»?",
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
        "question": "Какое утверждение точнее всего характеризует «Ограничения API — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Безопасная эксплуатация»?",
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
        "question": "Какое утверждение точнее всего характеризует «Безопасная эксплуатация — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Почему Gateway API»?",
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
        "question": "Какое утверждение точнее всего характеризует «Почему Gateway API — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «GatewayClass и Gateway»?",
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
        "question": "Какое утверждение точнее всего характеризует «GatewayClass и Gateway — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Routes и attachment»?",
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
        "question": "Какое утверждение точнее всего характеризует «Routes и attachment — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Статус как контракт»?",
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
        "question": "Какое утверждение точнее всего характеризует «Статус как контракт — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Переход от Ingress»?",
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
        "question": "Какое утверждение точнее всего характеризует «Переход от Ingress — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «HTTPRoute»?",
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
        "question": "Какое утверждение точнее всего характеризует «HTTPRoute — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Разделение TLS»?",
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
        "question": "Какое утверждение точнее всего характеризует «Разделение TLS — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Cross-namespace ссылки»?",
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
        "question": "Какое утверждение точнее всего характеризует «Cross-namespace ссылки — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Traffic filters и portability»?",
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
        "question": "Какое утверждение точнее всего характеризует «Traffic filters и portability — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «TLS и проверки»?",
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
        "question": "Какое утверждение точнее всего характеризует «TLS и проверки — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «L4 и L7»?",
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
        "question": "Какое утверждение точнее всего характеризует «L4 и L7 — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «GRPCRoute»?",
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
        "question": "Какое утверждение точнее всего характеризует «GRPCRoute — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Миграция с Ingress»?",
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
        "question": "Какое утверждение точнее всего характеризует «Миграция с Ingress — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Проверка и переключение»?",
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
        "question": "Какое утверждение точнее всего характеризует «Проверка и переключение — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Эксплуатационная граница»?",
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
        "question": "Какое утверждение точнее всего характеризует «Эксплуатационная граница — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Identity и ServiceAccount»?",
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
        "question": "Какое утверждение точнее всего характеризует «Identity и ServiceAccount — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «RBAC»?",
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
        "question": "Какое утверждение точнее всего характеризует «RBAC — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Admission и политики»?",
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
        "question": "Какое утверждение точнее всего характеризует «Admission и политики — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Pod security»?",
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
        "question": "Какое утверждение точнее всего характеризует «Pod security — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Supply chain и audit»?",
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
        "question": "Какое утверждение точнее всего характеризует «Supply chain и audit — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Слои наблюдаемости»?",
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
        "question": "Какое утверждение точнее всего характеризует «Слои наблюдаемости — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Состояние объектов»?",
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
        "question": "Какое утверждение точнее всего характеризует «Состояние объектов — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Метрики ресурса»?",
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
        "question": "Какое утверждение точнее всего характеризует «Метрики ресурса — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Логи и контекст»?",
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
        "question": "Какое утверждение точнее всего характеризует «Логи и контекст — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Alert и SLO»?",
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
        "question": "Какое утверждение точнее всего характеризует «Alert и SLO — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Дизайн кластера»?",
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
        "question": "Какое утверждение точнее всего характеризует «Дизайн кластера — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Control plane и etcd»?",
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
        "question": "Какое утверждение точнее всего характеризует «Control plane и etcd — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Обновление»?",
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
        "question": "Какое утверждение точнее всего характеризует «Обновление — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Drain и workloads»?",
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
        "question": "Какое утверждение точнее всего характеризует «Drain и workloads — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Rollback и проверка»?",
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
        "question": "Какое утверждение точнее всего характеризует «Rollback и проверка — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Факт и граница»?",
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
        "question": "Какое утверждение точнее всего характеризует «Факт и граница — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Workload»?",
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
        "question": "Какое утверждение точнее всего характеризует «Workload — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Сеть»?",
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
        "question": "Какое утверждение точнее всего характеризует «Сеть — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Control plane»?",
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
        "question": "Какое утверждение точнее всего характеризует «Control plane — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Завершение инцидента»?",
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
        "question": "Какое утверждение точнее всего характеризует «Завершение инцидента — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Декларативный источник истины»?",
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
        "question": "Какое утверждение точнее всего характеризует «Декларативный источник истины — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Helm»?",
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
        "question": "Какое утверждение точнее всего характеризует «Helm — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Поставка»?",
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
        "question": "Какое утверждение точнее всего характеризует «Поставка — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Secrets и окружения»?",
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
        "question": "Какое утверждение точнее всего характеризует «Secrets и окружения — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Rollback»?",
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
        "question": "Какое утверждение точнее всего характеризует «Rollback — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Исходная архитектура»?",
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
        "question": "Какое утверждение точнее всего характеризует «Исходная архитектура — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Платформенные границы»?",
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
        "question": "Какое утверждение точнее всего характеризует «Платформенные границы — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Надёжность»?",
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
        "question": "Какое утверждение точнее всего характеризует «Надёжность — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Безопасность»?",
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
        "question": "Какое утверждение точнее всего характеризует «Безопасность — дополнительный аспект»?",
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
        "question": "Какое утверждение точнее всего характеризует «Приёмка»?",
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
        "question": "Какое утверждение точнее всего характеризует «Приёмка — дополнительный аспект»?",
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
