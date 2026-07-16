[Исходная версия DOCX](../Kubernetes_программа_24_тома.docx)

# Kubernetes: подробный учебник

24 тома: от объектов API до CNI, Gateway API и production-эксплуатации

## Назначение учебника

Материал рассчитан на инженера, который хочет не только применять манифесты Kubernetes, но и понимать, как запрос проходит через API, контроллеры, kubelet, CNI, Service и gateway-контур. Каждый том будет содержать полную теоретическую лекцию, самостоятельную практику без искусственного хронометража, десять вопросов и список первоисточников.

Особый фокус: сеть Kubernetes разбирается не как набор YAML-объектов, а как путь пакета — от сетевого namespace Pod через CNI, маршрутизацию, Service и NetworkPolicy до внешнего Gateway. Ingress будет рассмотрен как стабильный, но замороженный API; современный основной путь — Gateway API и реализация, которую вы выберете для своей платформы.

## Структура курса

## Сетевой трек: обязательные темы

- Базовая сетевая модель: адреса Pod, DNS, Service, EndpointSlice, kube-proxy и conntrack.

- CNI как договор между kubelet и сетевым плагином: IPAM, MTU, overlay/underlay, BGP, eBPF и диагностика пакета.

- Сравнение подходов Cilium и Calico не по маркетинговым тезисам, а по dataplane, policy, observability и требованиям topology.

- Ingress как устоявшийся, но замороженный API; Gateway API как современный role-oriented API для L4/L7, TLS и cross-namespace routing.

- Production-тесты: NetworkPolicy default-deny, потеря node/CNI-agent, несовпадение MTU, DNS, Service endpoints, TLS и миграция с Ingress.

## Основные официальные источники

- Kubernetes Concepts и Cluster Architecture — https://kubernetes.io/docs/concepts/ и https://kubernetes.io/docs/concepts/architecture/

- Kubernetes Services, Networking и NetworkPolicy — https://kubernetes.io/docs/concepts/services-networking/

- Kubernetes Ingress и Gateway API — https://kubernetes.io/docs/concepts/services-networking/ingress/ и https://kubernetes.io/docs/concepts/services-networking/gateway/

- Gateway API SIG — https://gateway-api.sigs.k8s.io/docs/introduction/

- Cilium documentation — https://docs.cilium.io/

- Calico documentation — https://docs.tigera.io/calico/latest/

| Том | Тема | Результат обучения |
| --- | --- | --- |
| Том 1 | Зачем нужен Kubernetes и как устроен кластер | Контейнеры, декларативная модель, control plane, node, kubelet, API server, etcd; жизненный цикл запроса kubectl. |
| Том 2 | Объекты API, YAML и kubectl | manifest, metadata, spec/status, namespace, labels, selectors, server-side apply, diff и безопасное изменение объектов. |
| Том 3 | Pod, контейнер и жизненный цикл workload | Pod sandbox, init containers, probes, restart policy, requests/limits, QoS и диагностика состояния. |
| Том 4 | Deployment, ReplicaSet, StatefulSet, DaemonSet | Контроллеры, rollout/rollback, стратегии обновления, устойчивые имена и хранилище для stateful-нагрузок. |
| Том 5 | Job, CronJob, ConfigMap и Secret | Пакетные задачи, повторяемость, конфигурация, секреты, ротация и границы доступа. |
| Том 6 | Планирование и ресурсы | Scheduler, taints/tolerations, affinity, topology spread, requests/limits, autoscaling и защита от вытеснения. |
| Том 7 | Storage: PV, PVC, CSI и резервное копирование | StorageClass, binding, access modes, snapshots, recovery и опасные операции с PVC. |
| Том 8 | Сетевая модель Kubernetes | IP Pod, namespace сети, veth, маршрутизация, DNS, Service, EndpointSlice, kube-proxy и conntrack. |
| Том 9 | CNI: контракт, IPAM и подключение Pod | CNI specification, ADD/DEL/CHECK, конфигурация node, IPAM, MTU, диагностика создания интерфейса. |
| Том 10 | CNI: overlay, underlay и маршрутизация | VXLAN, Geneve, IP-in-IP, direct routing, BGP, native routing; выбор по topology и отказам. |
| Том 11 | CNI: eBPF и dataplane Cilium | eBPF, kube-proxy replacement, service load balancing, observability Hubble, ограничения и проверка пути пакета. |
| Том 12 | CNI: Calico, NetworkPolicy и сегментация | Calico dataplane/IPAM, BGP и overlays, policy tiers, default-deny, DNS/egress и troubleshooting политики. |
| Том 13 | Service и публикация внутри кластера | ClusterIP, headless, NodePort, LoadBalancer, EndpointSlice, session affinity, external traffic policy. |
| Том 14 | NetworkPolicy в production | Ingress/egress правила, selectors, namespace isolation, порядок внедрения default-deny, тесты и наблюдаемость. |
| Том 15 | Ingress: наследие и безопасная эксплуатация | IngressClass, controller, TLS, path/host rules, annotations, риски переносимости и причины перехода к Gateway API. |
| Том 16 | Gateway API: модель ролей и базовые ресурсы | GatewayClass, Gateway, Listener, HTTPRoute, ReferenceGrant, status conditions и разделение ответственности. |
| Том 17 | Gateway API: маршрутизация и TLS | Host/path/header matching, redirects, rewrites, traffic splitting, cross-namespace routes, TLS и сертификаты. |
| Том 18 | Gateway API: L4, gRPC и миграция с Ingress | TCPRoute, TLSRoute, GRPCRoute, конформность контроллеров, план миграции, canary и rollback. |
| Том 19 | RBAC, admission и безопасность платформы | ServiceAccount, Role/ClusterRole, least privilege, Pod Security Admission, policy engines и supply chain. |
| Том 20 | Наблюдаемость Kubernetes | Метрики, логи, трассировки, события, SLI, kube-state-metrics, запросы и alerting data plane. |
| Том 21 | Установка и обновление production-кластера | kubeadm, HA control plane, etcd backup, версии, upgrade, drain/PDB, сертификаты и rollback. |
| Том 22 | Troubleshooting: системный метод | kubectl, events, logs, exec, ephemeral containers, control plane, node, CNI, DNS, Service и ingress диагностика. |
| Том 23 | GitOps, Helm и изменения как код | Helm, Kustomize, Argo CD, CI/CD, secret management, drift, progressive delivery и audit. |
| Том 24 | Итоговый production-проект Kubernetes | Архитектура приложения, CNI/ingress/Gateway решение, security, storage, SLO, failure model, runbook и приёмка. |
