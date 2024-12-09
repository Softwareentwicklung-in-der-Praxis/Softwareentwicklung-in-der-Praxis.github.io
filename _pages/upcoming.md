---
layout: default
permalink: /upcoming
title: Unsere nächsten Veranstaltungen
---

{% for post in site.posts reversed %}
{% if post.status=="upcoming" %}
<div>
  <h4 id="{{ post.code }}"> {{ post.title }} ({{ post.sprecher }})</h4>
  <div class="text-muted">
    {{post.date | date: '%d.%m.%Y'}}, {{ post.zeit }} Uhr
    <span class="badge badge-pill badge-success float-right">Demnächst</span>
  </div>
 <p>{{ post.short}}</p>
  <a aria-describedBy="{{ post.code }}" class="btn btn-light" href="{{ post.url }}">mehr...</a>
 
  </div>
{% if forloop.last == false %}
<hr>
{% endif %}

{% endif %}
{% endfor %}