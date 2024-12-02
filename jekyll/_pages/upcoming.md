---
layout: default
permalink: /upcoming
title: Unsere nächsten Veranstaltungen
---

{% for post in site.posts reversed %}
{% if post.status=="upcoming" %}
<div>
  <a href="{{ post.url }}">
    <h4> {{ post.title }} ({{ post.sprecher }})</h4>
  </a>
  <div class="text-muted">
    {{post.date | date: '%d.%m.%Y'}}, {{ post.zeit }} Uhr
    <span class="badge badge-pill badge-success float-right">Demnächst</span>
  </div>
 <p>{{ post.short}}</p>
  <a class="btn btn-light" href="{{ post.url }}">mehr...</a>
 
  </div>
{% if forloop.last == false %}
<hr>
{% endif %}

{% endif %}
{% endfor %}