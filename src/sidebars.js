module.exports = {
  Introduction: [
    "getting-started/introduction",
    "getting-started/installation",
    "getting-started/quickstart",
    "getting-started/highlights",
    "getting-started/client_api",
    "getting-started/integration",
    "getting-started/design",
    "getting-started/migration_v4",
  ],
  Guides: [
    "server/configuration",
    "server/console_commands",
    "server/server_api",
    "server/authentication",
    "server/channels",
    "server/channel_permissions",
    "server/channel_token_auth",
    "server/capabilities",
    "server/server_subs",
    "server/engines",
    "server/proxy",
    "server/history_and_recovery",
    "server/admin_web",
    "server/monitoring",
    "server/infra_tuning",
    "server/load_balancing",
    "server/tls",
    "server/codes",
  ],
  Transports: [
    "transports/overview",
    {
      type: 'category',
      label: 'Bidirectional',
      collapsed: false,
      items: [
        "transports/client_api",
        "transports/client_sdk",
        "transports/websocket",
        "transports/http_stream",
        "transports/sse",
        "transports/sockjs",
        "transports/client_protocol"
      ],
    },
    {
      type: 'category',
      label: 'Unidirectional',
      collapsed: false,
      items: [
        "transports/uni_websocket",
        "transports/uni_sse",
        "transports/uni_http_stream",
        "transports/uni_grpc",
      ],
    },
  ],
  Pro: [
    "pro/overview",
    "pro/install_and_run",
    {
      type: 'category',
      label: 'PRO features',
      collapsed: false,
      items: [
        "pro/tracing",
        "pro/analytics",
        "pro/user_status",
        "pro/throttling",
        "pro/user_connections",
        "pro/user_block",
        "pro/token_revocation",
        "pro/performance",
        "pro/singleflight",
        "pro/process_stats",
      ],
    },
  ],
  Ecosystem: [
    "ecosystem/centrifuge",
    "ecosystem/integrations",
  ],
};
