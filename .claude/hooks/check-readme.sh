#!/bin/bash
# check-readme.sh — Se ejecuta después de Edit/Write
# Avisa a Claude cuando un archivo estructural fue modificado y el README puede necesitar actualización

FILE_PATH=$(echo "$CLAUDE_TOOL_INPUT" | python3 -c \
  "import sys, json; d=json.load(sys.stdin); print(d.get('file_path',''))" 2>/dev/null)

if [[ "$FILE_PATH" =~ panel_tshirts/(client/src/pages/|client/src/App\.tsx|client/src/lib/products\.ts|server/index\.ts|shared/|client/src/components/[A-Z]) ]]; then
  RELATIVE="${FILE_PATH##*/panel_tshirts/}"
  echo "⚠️  ARCHIVO ESTRUCTURAL MODIFICADO: ${RELATIVE}"
  echo "   → Verifica si README.md necesita actualizarse para reflejar este cambio."
fi
