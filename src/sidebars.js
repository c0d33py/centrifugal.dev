module.exports = {
  Introduction: [
    "getting-started/introduction",
    "getting-started/community",
    "getting-started/installation",
    "getting-started/quickstart",
    "getting-started/highlights",
    "getting-started/integration",
    "getting-started/design",
    "getting-started/ecosystem",
    "getting-started/migration_v4",
  ],
  Guides: [
    "server/configuration",
    "server/server_api",
    "server/authentication",
    "server/channels",
    "server/channel_permissions",
    "server/channel_token_auth",
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
    "server/console_commands",
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
        "transports/webtransport",
        "transports/client_protocol"
      ],
    },
    {
      type: 'category',
      label: 'Unidirectional',
      collapsed: false,
      items: [
        "transports/uni_websocket",
        "transports/uni_http_stream",
        "transports/uni_sse",
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
        "pro/throttling",
        "pro/push_notifications",
        "pro/user_status",
        "pro/connections",
        "pro/user_block",
        "pro/token_revocation",
        "pro/capabilities",
        // "pro/channel_patterns",
        // "pro/tenant_channels",
        // "pro/cel_expressions",
        "pro/performance",
        "pro/singleflight",
        // "pro/client_message_batching",
        "pro/process_stats",
      ],
    },
  ]
};
