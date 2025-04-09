import { select, range } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;
const numCircles = 100;
const radius = 20;
const circleRadius = 10;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// First mask
const mask = svg
  .append("mask")
  .attr("id", "circle-mask-1")
  .attr("width", 10)
  .attr("height", height)
  .attr("x", 200);

mask
  .append("rect")
  .attr("width", 10)
  .attr("height", height)
  .attr("fill", "white");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", circleRadius)
  .attr("fill", "black")
  .attr("mask", "url(#circle-mask-1)");

// Second mask
const mask2 = svg
  .append("mask")
  .attr("id", "circle-mask-2")
  .attr("width", 10)
  .attr("height", height)
  .attr("x", 200);

mask2
  .append("rect")
  .attr("width", 10)
  .attr("height", height)
  .attr("fill", "white");
mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", circleRadius)
  .attr("fill", "black")
  .attr("mask", "url(#circle-mask-2)");
