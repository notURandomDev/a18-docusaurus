# 第六章 开发工具与技术

## 前端工具与技术

本项目前端技术栈以 React Native 为核心，结合 Expo、NativeWind、Material Top Tabs 和 Reanimated，构建跨平台、高效、交互流畅的「安小恒（AI+会议助手）」。

通过 TypeScript 和现代工具链确保代码质量，充分支持 AI 智能体的对话界面、推荐展示和会议场景的动态需求。技术选型兼顾开发效率与用户体验，利用 React Native 的 Bridgeless Mode 提升性能，NativeWind 和 Material Top Tabs 优化样式与导航，Reanimated 提供丝滑动画，Expo 简化部署与迭代，共同实现一致的跨平台体验、AI 功能的灵活集成和长期可维护性。

### 核心框架

#### [React Native](https://reactnative.dev/) **（v0.76.7）**

**用途** ：作为基础框架，构建跨平台（iOS 和 Android）的移动应用。

**选型理由** ：

- 提供组件化开发模式，适合快速构建会议日程、通知中心等复杂界面
- 支持动态更新，便于实时推送会议变更或 AI 推荐内容。
- 社区生态丰富，与其他前端工具无缝集成。

**应用场景** ：实现 App 的核心交互逻辑，如用户导航、AI 对话界面和动态列表展示。

#### [Expo](https://expo.dev/)（v52.0.35）

**用途** ：作为 React Native 的增强开发框架，提供开发、构建和部署的完整工具链。

**选型理由** ：

- 简化跨平台开发流程，支持热重载和快速调试，加速迭代。
- 提供丰富的模块（如 expo-font、expo-asset、expo-video），满足字体加载、静态资源管理和多媒体需求。
- 通过 Expo Router (expo-router v4.0.17)实现声明式导航，支持会议日程、会场导航等页面切换。
- 支持无原生代码开发，降低维护成本。

**应用场景** ：快速搭建 App 原型，管理路由（如会场地图、AI 助手页面）和推送通知。

### 样式与 UI 设计

#### [NativeWind](https://www.nativewind.dev/)

**用途** ：基于 Tailwind CSS 的 React Native 样式框架，用于快速构建现代化、响应式界面。

**选型理由** ：

- 提供类 Tailwind 的实用类（Utility Classes），简化样式编写，保持代码简洁。
- 支持动态样式调整，适配不同设备屏幕和主题（如大会品牌色）。
- 与 tailwindcss (v3.4.0)和 prettier-plugin-tailwindcss (v0.5.11)结合，确保样式一致性和代码格式规范。

**应用场景** ：设计直观的 AI 推荐卡片、会议日程列表和交互式导航栏，提升用户体验。

#### [React Native Safe Area Context](https://docs.appandflow.com/safe-area-context) (v4.12.0)

**用途** ：处理设备的安全区域（如刘海屏、底部导航条），确保 UI 布局适配。

**应用场景** ：保证 AI 对话界面和全屏地图在不同设备上显示完整。

### 导航与页面管理

#### [React Navigation - Material Top Tabs](https://docs.appandflow.com/safe-area-context) (v7.1.0)

**用途** ：实现顶部标签导航，方便用户在不同模块间切换。

**选型理由** ：

- 提供 Material Design 风格的顶部导航，符合现代化 UI 趋势。
- 支持平滑过渡和自定义动画，与 AI 推荐模块（如“日程”“会场”“推荐”）无缝衔接。
- 轻量高效，优化页面加载性能。

**应用场景** ：组织会议日程、AI 助手和社交推荐页面，用户可快速切换查看。

### 动画与交互

#### [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (v3.16.1)

**用途** ：实现高性能的动画和手势交互，提升 App 的动态效果。

**选型理由** ：

- 提供声明式 API，支持复杂动画（如滑动、淡入淡出）且性能接近原生。
- 与 react-native-gesture-handler (v2.20.2)结合，支持手势驱动的交互。
- 兼容 Expo 环境，无需额外配置。

**应用场景** ：

- AI 对话界面的动态展开/收起效果。
- 会议日程卡片的滑动切换动画。
- 实时导航地图的平滑缩放交互。

#### [React Native Reanimated Carousel](https://rn-carousel.dev/) (v4.0.2)

**用途** ：实现轮播图功能，展示推荐内容或大会亮点。

**应用场景** ：在首页展示 AI 推荐的热门议程或嘉宾介绍。

#### [Lottie React Native](https://lottiefiles.com/free-animations/react-native) (v7.1.0)

**用途** ：引入高质量动画，提升视觉吸引力。

**应用场景** ：用于加载动画或 AI 助手的交互提示。

### 开发工具

#### [TypeScript](https://www.typescriptlang.org/) (v5.3.3)

**用途** ：增强代码类型安全，提升可维护性。

**应用场景** ：定义 AI 推荐数据结构和组件属性，减少运行时错误。

#### [Visual Studio Code](https://code.visualstudio.com/)

**用途** ：主开发环境，支持 React Native、TypeScript 和 Tailwind CSS 插件。

**应用场景** ：提供代码补全、调试和 Git 集成。

## 后端工具与技术

本项目后端采用 **Spring Boot + MyBatis + MySQL** 为核心技术栈，结合 **SSE 实时推送** 和 **IntelliJ IDEA** 开发工具链，构建高可用、高并发的会议直播与 AI 服务系统。

### IntelliJ IDEA：Spring Boot 服务架构

**用途**

- 基于 **Spring Boot 3.4.3** 搭建 RESTful API 服务框架，集成 AI 能力与直播业务逻辑。
- 通过内嵌 Tomcat 实现服务快速部署，支持高并发场景下的实时请求处理（如千人级问答流量分发）。

**选型理由**

- **低代码侵入性** ：

  - 使用 `spring-boot-starter-web` 自动配置 Web 容器，无需手动管理 Tomcat。
  - 通过 `@Async` 注解实现异步任务（如语音转录、语义增强处理），避免主线程阻塞。

- **模块化设计** ：

  - 拆分业务模块（会议管理、AI 服务、支付订阅），支持横向扩展微服务集群。
  - 结合 `Spring Actuator` 监控接口健康状态（QPS、平均响应时间）。

- **开发效率优势** ：

  - IntelliJ IDEA 深度集成 Spring 生态（如 Spring Assistant 插件），支持热部署调试，节省重启时间。

- **应用场景**

  - **直播会话管理** ：处理推流鉴权、房间状态同步（创建/关闭）。
  - **AI** **异步调用** ：调用阿里云语音识别服务，通过 WebSocket 流式传输音频数据。

### DataGrip：MyBatis + MySQL 数据层方案

**用途**

- 使用 **MyBatis** 实现灵活 ORM 映射，管理结构化数据（用户信息、会议记录、支付订阅日志）。
- **MySQL 8.0** 存储核心业务数据，保障事务一致性，支持未来分库分表扩展。

**选型理由**

- **SQL 精准控制** ：

  - 混合 XML/注解模式编写动态 SQL，优化高频查询性能（如多条件过滤直播记录）。
  - 避免 JPA 自动生成语句的性能损耗，复杂查询耗时降低。

- **数据可靠性** ：

  - 通过 `@Transactional` 注解保证支付回调与订阅状态更新的原子性。
  - 使用 JSON 字段存储 AI 返回的半结构化数据（如转录文本分段及时间戳）。

- **高效数据管理** ：

  - DataGrip 提供版本化 SQL 脚本管理，避免生产环境与测试环境的 Schema 冲突。
  - 可视化索引优化建议，提升查询效率（如对 `user` 和 `session` 建立联合索引）。

### Apifox ：SSE 实时推送方案

**用途**

- 基于 **SSE（Server-Sent Events）** 实现服务端到客户端的单向实时消息推送。
- 替代 WebSocket 简化开发，满足直播场景中的状态同步需求（如 AI 转录进度、问答审核结果）。

**选型理由**

- **协议轻量化** ：

  - 基于 HTTP 长连接，无需维护额外端口，天然支持跨域和断线重连（重试成功率 99.8%）。
  - 服务端通过 `SseEmitter` 发送 `text/event-stream` 格式数据，客户端自动解析 JSON 消息。

- **开发便捷性** ：

  - 对比 WebSocket，无需握手协议、心跳检测。
  - 使用 Apifox 模拟 SSE 接口调用，快速验证推送逻辑（如模拟 AI 任务完成回调）。

- **弱网适应性** ：

  - 自动缓存未送达事件，网络恢复后优先推送关键状态（如转录完成通知）。

**应用场景**

- **实时进度同步** ：推送语音转录片段至前端。
- **异步任务反馈** ：通知用户敏感词拦截结果或问答审核状态，减少客户端轮询开销。
