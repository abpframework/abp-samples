{{- define "bookstore.hosts.httpapi" -}}
{{- print "https://" (.Values.global.hosts.httpapi | replace "[RELEASE_NAME]" .Release.Name) -}}
{{- end -}}
{{- define "bookstore.hosts.blazor" -}}
{{- print "https://" (.Values.global.hosts.blazor | replace "[RELEASE_NAME]" .Release.Name) -}}
{{- end -}}
