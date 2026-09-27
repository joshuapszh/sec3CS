import re, json
from pathlib import Path

dirs = ['sec3-cs-mock-p1','sec3-cs-mock-p1-v2','sec3-cs-mock-p1-v3','sec3-cs-mock-p2','sec3-cs-mock-p2-v2','sec3-cs-mock-p2-v3']

def load_exam(d):
    raw = Path(d,'questions.js').read_text(encoding='utf-8')
    m = re.search(r'window\.EXAM\s*=\s*', raw)
    body = raw[m.end():].rstrip().rstrip(';')
    try:
        return json.loads(body)
    except Exception:
        fixed = re.sub(r'([{\[,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', body)
        return json.loads(fixed)

out = []
for d in dirs:
    exam = load_exam(d)
    qs = exam['questions']
    out.append('='*70)
    out.append(d + ' | ' + exam.get('subtitle',''))
    # Feature counts
    left = assign_eq = for_c = while_c = repeat_c = declare = input_c = output_c = endif = case = proc = 0
    html_tags = 0
    multi_part = 0
    marks_in_prompt = 0
    for q in qs:
        blob = q['prompt'] + '\n' + (q.get('markScheme') or '')
        if '←' in blob or '<-' in blob: left += 1
        if re.search(r'\bFOR\b', blob): for_c += 1
        if re.search(r'\bWHILE\b', blob): while_c += 1
        if re.search(r'\bREPEAT\b', blob): repeat_c += 1
        if re.search(r'\bDECLARE\b', blob): declare += 1
        if re.search(r'\bINPUT\b', blob): input_c += 1
        if re.search(r'\bOUTPUT\b', blob): output_c += 1
        if re.search(r'\bENDIF\b', blob): endif += 1
        if re.search(r'\bCASE\b', blob): case += 1
        if re.search(r'\bPROCEDURE\b', blob): proc += 1
        if re.search(r'<[a-zA-Z/]', q['prompt']): html_tags += 1
        if re.search(r'\([a-e]\)', q['prompt']): multi_part += 1
        if re.search(r'\[\d+\]', q['prompt']): marks_in_prompt += 1
        # assignment with =
        if re.search(r'(FOR|WHILE|REPEAT|DECLARE|OUTPUT|INPUT|IF)', blob) and re.search(r'\w\s*=\s*[^=]', blob) and '←' not in blob and '<-' not in blob:
            assign_eq += 1
    out.append(f'pseudo Q+MS: leftarrow={left} FOR={for_c} WHILE={while_c} REPEAT={repeat_c} DECLARE={declare} INPUT={input_c} OUTPUT={output_c} ENDIF={endif} CASE={case} PROC={proc} assign_eq_no_arrow={assign_eq}')
    out.append(f'prompt: html_tags={html_tags} multi_part_abc={multi_part} marks_[n]_in_prompt={marks_in_prompt}')
    out.append('--- each question ---')
    for q in qs:
        p = q['prompt']
        parts = re.findall(r'\([a-e]\)', p)
        mark_in = re.findall(r'\[\d+\]', p)
        preview = p.replace('\n',' | ')[:140]
        out.append(f"{q['id']:4} {q['type']:7} [{q['marks']:2}] sec={q['section']} parts={parts} marksIn={mark_in}")
        out.append(f"     PROMPT: {preview}")
        ms = (q.get('markScheme') or '').replace('\n',' | ')[:160]
        out.append(f"     MS: {ms}")

Path('_audit_out.txt').write_text('\n'.join(out), encoding='utf-8')
print('Wrote _audit_out.txt lines', len(out))
