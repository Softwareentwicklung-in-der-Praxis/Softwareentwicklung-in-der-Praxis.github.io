---
layout: default
permalink: /archiv
title: Vergangene Veranstaltungen
---

{% for post in site.posts reversed %}
{% if post.status=="past" %}
<div>
  <a href="{{ post.url }}">
    <h4> {{ post.title }} </h4>
  </a>
  <div class="text-muted">
    {{post.date | date: '%d.%m.%Y'}}, {{ post.zeit }} Uhr
    <span class="badge badge-pill badge-success float-right">Demnächst</span>
  </div>
 </div>
{% if forloop.last == false %}
<hr>
{% endif %}
{% endif %}
{% endfor %}